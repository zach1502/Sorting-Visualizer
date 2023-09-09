#include <chrono>
#include <condition_variable>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <map>
#include <unordered_map>
#include <mutex>
#include <queue>
#include <random>
#include <sstream>
#include <thread>
#include <vector>

#include "sorting_algorithms/AllAlgorithms.hpp"
#include "utils/DataGeneration.hpp"

enum TrialType { Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes };
const std::string TYPE_LOOK_UP[6] = {"Random", "PartiallySorted", "Reversed",
                                     "Sorted", "Dupes",           "ManyDupes"};

// file
std::mutex fileMutex;

// work
std::mutex mtx;
std::condition_variable cv;
using TaskType =
    std::tuple<std::string, void (*)(std::vector<int>&), TrialType>;
std::queue<TaskType> workQueue;
const TaskType STOP_SIGNAL = {"STOP", nullptr, Random};

// consts
const int TRIAL_COUNT = 10;
const int MAX_GEN_RETRY_COUNT = 100;
const int MAX_SORT_RETRY_COUNT = 100;
const int MAX_THREAD_COUNT = 8;

const int MIN_ARRAY_SIZE = 10;
const int MAX_ARRAY_SIZE = 50000000;

//{from, to}
const std::unordered_map<int, int> trialSizes = {
    {10, 50},
    {50, 100},
    {100, 500},
    {500, 1000},
    {1000, 5000},
    {5000, 10000},
    {10000, 50000},
    {50000, 100000},
    {100000, 500000},
    {500000, 1000000},
    {1000000, 2000000},
    {2000000, 5000000},
    {5000000, 10000000},
};

int getNextArraySize(int size) {
  return trialSizes.at(size);
}

void generateData(TrialType type, int size, std::vector<int>& data) {
  switch (type) {
    case Random:
      generateRandomData(size, data);
    case PartiallySorted:
      generatePartiallySortedData(size, data);
    case Reversed:
      generateReversedData(size, data);
    case Sorted:
      generateSortedData(size, data);
    case Dupes:
      generateDupedData(size, false, data);
    case ManyDupes:
      generateDupedData(size, true, data);
    default:
      generateRandomData(size, data);
  }
}

double runTrial(void (*sortingAlgorithm)(std::vector<int>&),
                TrialType type = Random, int size = 10000) {
  long double averageDuration = 0.0;

  int sortRetryCounter = 0;

  // For each trial
  for (int i = 1; i <= TRIAL_COUNT; i++) {
    std::cout << "Trial " << i << "...";

    // try and reserve memory for array length size
    std::vector<int> data;
    bool unsuccessful = true;
    int retryCounter = 0;
    while (unsuccessful) {
      try {
        data.reserve(size);
        data.resize(size);
        generateData(type, size, data);
        unsuccessful = false;
      } catch (std::exception& e) {
        std::cout << "Failed to reserve memory for array of size " << size
                  << " Retrying..." << std::endl;
        retryCounter++;
        if (retryCounter > MAX_GEN_RETRY_COUNT) {
          throw std::runtime_error("Failed to allocate array of size " +
                                   std::to_string(size) + " after " +
                                   std::to_string(MAX_SORT_RETRY_COUNT) +
                                   " attempts: ERROR: " + e.what());
        }
      }
    }

    // run the sorting algorithm
    auto start = std::chrono::high_resolution_clock::now();
    try {
      sortingAlgorithm(data);
    } catch (const std::exception& e) {
      std::cout << "Failed to sort array of size " << size << " Retrying..."
                << std::endl;
      i--;

      if (sortRetryCounter > MAX_SORT_RETRY_COUNT) {
        throw std::runtime_error("Failed to sort array of size " +
                                 std::to_string(size) + " after " +
                                 std::to_string(MAX_SORT_RETRY_COUNT) +
                                 " attempts: ERROR: " + e.what());
      }

      sortRetryCounter++;
      continue;
    };
    auto end = std::chrono::high_resolution_clock::now();

    // keep track
    double duration =
        std::chrono::duration_cast<std::chrono::milliseconds>(end - start)
            .count();

    averageDuration = (i - 1) * averageDuration / i + duration / i;
    std::cout << " took " << std::setprecision(15) << duration
              << " ms" << std::endl;
  }

  return averageDuration;
}

void workerThread() {
  while (true) {
    TaskType task;
    {
      std::unique_lock<std::mutex> lock(mtx);
      cv.wait(lock, [] { return !workQueue.empty(); });
      task = workQueue.front();
      workQueue.pop();
    }

    if (task == STOP_SIGNAL) {
      break;  // Exit the loop and thus exit the thread
    }

    auto& [name, func, type] = task;

    for (int size = MIN_ARRAY_SIZE; size <= MAX_ARRAY_SIZE; size = getNextArraySize(size)) {
      std::cout << "Running " << name << " Using Data Type: " << type
                << "With Array Size: " << size << "..." << std::endl;
      try {
        double avgTime = runTrial(func, type, size);
        std::lock_guard<std::mutex> lock(fileMutex);
        std::ofstream csvFile("results.csv", std::ios::app);
        csvFile << name << "," << TYPE_LOOK_UP[type] << "," << size << ","
                << std::setprecision(15) << avgTime << std::endl;
        csvFile.close();
      } catch (std::exception& e) {
        std::lock_guard<std::mutex> lock(fileMutex);
        std::ofstream csvFile("results.csv", std::ios::app);
        csvFile << name << "," << TYPE_LOOK_UP[type] << "," << size << ","
                << "FAILED BECAUSE OF: " << e.what() << std::endl;
        csvFile.close();
      }
    }
  }
}

struct TrialData {
  std::string name;
  std::string type;
  int size;
  double time;

  TrialData(const std::string& n, const std::string& t, int s, double ti)
      : name(n), type(t), size(s), time(ti) {}
};

void reformatCSV(const std::string& inputFilename,
                 const std::string& outputFilename) {
  std::ifstream inFile(inputFilename);
  std::ofstream outFile(outputFilename);

  if (!inFile.is_open() || !outFile.is_open()) {
    std::cerr << "Failed to open files." << std::endl;
    return;
  }

  // Read current CSV data and store in a map of maps for easy lookup
  std::map<std::string, std::map<int, std::map<std::string, double>>> dataMap;
  std::string line;

  while (std::getline(inFile, line)) {
    std::istringstream ss(line);
    std::string name, type;
    int size;
    double time;

    std::getline(ss, name, ',');
    std::getline(ss, type, ',');
    ss >> size;
    std::getline(ss, line, ',');  // To discard the comma
    ss >> time;

    dataMap[name][size][type] = time;
  }

  // Write to new CSV in the desired format
  for (const auto& [name, sizeMap] : dataMap) {
    outFile << name << std::endl;
    outFile << "n,Dupes,ManyDupes,PartiallySorted,Random,Reversed,Sorted\n";

    for (const auto& [size, typeMap] : sizeMap) {
      outFile << size;
      for (const auto& type : {"Dupes", "ManyDupes", "PartiallySorted",
                               "Random", "Reversed", "Sorted"}) {
        auto it = typeMap.find(type);
        if (it != typeMap.end()) {
          outFile << "," << it->second;
        } else {
          outFile << ",0";
        }
      }
      outFile << std::endl;
    }

    outFile << std::endl;
  }

  inFile.close();
  outFile.close();
}

int main() {
  // speed up
  std::ios_base::sync_with_stdio(NULL);
  std::cin.tie(NULL);
  std::cout.tie(NULL);

  // clear prev data
  std::ofstream csvFile("results.csv");
  csvFile.close();

  // load it up
  for (const auto& algorithm : algorithms) {
    for (const auto& type :
         {Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes}) {
      workQueue.push({algorithm.first, algorithm.second, type});
    }
  }

  // stop signals to the end
  for (int i = 0; i < MAX_THREAD_COUNT; ++i) {
    workQueue.push(STOP_SIGNAL);
  }

  // Start n worker threads
  std::vector<std::thread> threads;
  for (int i = 0; i < MAX_THREAD_COUNT; ++i) {
    threads.emplace_back(workerThread);
  }

  for (auto& t : threads) {
    t.join();
  }

  csvFile.close();

  reformatCSV("results.csv", "formatted_results.csv");

  return 0;
}
