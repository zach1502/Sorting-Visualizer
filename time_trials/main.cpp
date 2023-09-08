#include <chrono>
#include <condition_variable>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <mutex>
#include <queue>
#include <random>
#include <thread>
#include <vector>

#include "sorting_algorithms/AllAlgorithms.hpp"
#include "utils/DataGeneration.hpp"

// file
std::mutex fileMutex;

// work
std::mutex mtx;
std::condition_variable cv;
std::queue<std::pair<std::string, void (*)(std::vector<int>&)>> workQueue;

const std::pair<std::string, void (*)(std::vector<int>&)> STOP_SIGNAL = {
    "STOP", nullptr};

enum TrialType { Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes };
const std::string TYPE_LOOK_UP[6] = {"Random", "PartiallySorted", "Reversed",
                                     "Sorted", "Dupes",           "ManyDupes"};
const int TRIAL_COUNT = 10;
const int MAX_GEN_RETRY_COUNT = 100;
const int MAX_SORT_RETRY_COUNT = 100;

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
      } catch (std::bad_alloc& e) {
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
              << " milliseconds" << std::endl;
  }

  return averageDuration;
}

void workerThread() {
  while (true) {
    std::pair<std::string, void (*)(std::vector<int>&)> task;
    {
      std::unique_lock<std::mutex> lock(mtx);
      cv.wait(lock, [] { return !workQueue.empty(); });
      task = workQueue.front();
      workQueue.pop();
    }

    if (task == STOP_SIGNAL) {
      break;  // Exit the loop and thus exit the thread
    }

    for (const auto& type :
         {Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes}) {
      for (int size = 2; size <= (1 << 20); size <<= 1) {
        std::cout << "Running " << task.first << " Using Data Type: " << type
                  << "With Array Size: " << size << "..." << std::endl;
        try {
          double avgTime = runTrial(task.second, type, size);
          std::lock_guard<std::mutex> lock(fileMutex);
          std::ofstream csvFile("results.csv",
                                std::ios::app);  // Open in append mode
          csvFile << task.first << "," << TYPE_LOOK_UP[type] << "," << size
                  << "," << avgTime << std::endl;
          csvFile.close();
        } catch (std::exception& e) {
          std::lock_guard<std::mutex> lock(fileMutex);
          std::ofstream csvFile("results.csv",
                                std::ios::app);  // Open in append mode
          csvFile << task.first << "," << TYPE_LOOK_UP[type] << "," << size
                  << ","
                  << "FAILED BECAUSE OF: " << e.what() << std::endl;
          csvFile.close();
        }
      }
    }
  }
}

int main() {
  // clear prev data
  std::ofstream csvFile("results.csv");
  csvFile.close();

  // load it up
  for (const auto& algorithm : algorithms) {
    workQueue.push(algorithm);
  }

  // stop signals to the end
  for (int i = 0; i < 4; ++i) {
    workQueue.push(STOP_SIGNAL);
  }

  // Start 4 worker threads
  std::vector<std::thread> threads;
  for (int i = 0; i < 4; ++i) {
    threads.emplace_back(workerThread);
  }

  // Join all threads (in real code, you'd want a way to exit the threads
  // cleanly)
  for (auto& t : threads) {
    t.join();
  }

  return 0;
}
