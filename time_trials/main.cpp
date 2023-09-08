#include <chrono>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <random>
#include <vector>

#include "sorting_algorithms/AllAlgorithms.hpp"

enum TrialType { Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes };
const std::string TYPE_LOOK_UP[6] = {"Random", "PartiallySorted", "Reversed",
                                     "Sorted", "Dupes",           "ManyDupes"};
const int TRIAL_COUNT = 10;
const int MAX_GEN_RETRY_COUNT = 100;
const int MAX_SORT_RETRY_COUNT = 100;

void generateRandomData(size_t size, std::vector<int> &data) {
  std::random_device rd;
  std::mt19937 gen(rd());
  std::uniform_int_distribution<> distrib(0, INT_MAX);

  for (size_t i = 0; i < size; i++) {
    data[i] = distrib(gen);
  }
}

void generatePartiallySortedData(size_t size, std::vector<int> &data) {
  for (size_t i = 0; i < size; i++) {
    data[i] = i;
  }

  std::random_device rd;
  std::mt19937 generator(rd());
  std::uniform_int_distribution<size_t> dist(0, size - 1);

  size_t numSwaps = static_cast<size_t>(0.05 * size);
  for (size_t i = 0; i < numSwaps; i++) {
    size_t idx1 = dist(generator);
    size_t idx2 = dist(generator);
    std::swap(data[idx1], data[idx2]);
  }
}

void generateReversedData(size_t size, std::vector<int> &data) {
  for (size_t i = 0; i < size; i++) {
    data[i] = size - i;
  }
}

void generateSortedData(size_t size, std::vector<int> &data) {
  for (size_t i = 0; i < size; i++) {
    data[i] = i;
  }
}

void generateDupedData(size_t size, bool manyDupes, std::vector<int> &data) {
  const int modifier = ((int)manyDupes) * 2;
  std::random_device rd;
  std::mt19937 gen(rd());

  // pigeonhole principle
  std::uniform_int_distribution<> distrib(
      0, size >> (3 + modifier));  // size / 8 or / 32

  for (size_t i = 0; i < size; i++) {
    data[i] = distrib(gen);
  }
}

void generateData(TrialType type, int size, std::vector<int> &data) {
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

double runTrial(void (*sortingAlgorithm)(std::vector<int> &),
                TrialType type = Random, int size = 10000) {
  long double averageDuration = 0.0;

  int sortRetryCounter = 0;

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
      } catch (std::bad_alloc &e) {
        std::cout << "Failed to reserve memory for array of size " << size
                  << " Retrying..." << std::endl;
        retryCounter++;
        if (retryCounter > MAX_GEN_RETRY_COUNT) return -1;
      }
    }

    auto start = std::chrono::high_resolution_clock::now();
    try {
      sortingAlgorithm(data);
    } catch (std::bad_alloc &e) {
      std::cout << "Failed to sort array of size " << size << " Retrying..."
                << std::endl;
      i--;

      if (sortRetryCounter > MAX_SORT_RETRY_COUNT) {
        throw std::runtime_error(
            "Failed to sort array of size " + std::to_string(size) + " after " +
            std::to_string(MAX_SORT_RETRY_COUNT) + " attempts");
      }

      sortRetryCounter++;
      continue;
    };
    auto end = std::chrono::high_resolution_clock::now();

    double duration =
        std::chrono::duration_cast<std::chrono::milliseconds>(end - start)
            .count();

    averageDuration = (i - 1) * averageDuration / i + duration / i;
    std::cout << " took " << std::setprecision(15) << duration
              << " milliseconds" << std::endl;
  }

  return averageDuration;
}

int main() {
  std::ofstream csvFile("results.csv");

  for (const auto &[name, func] : algorithms) {
    for (const auto &type :
         {Random, PartiallySorted, Reversed, Sorted, Dupes, ManyDupes}) {
      for (int size = 1; size <= (1 << 18); size <<= 1) {
        std::cout << "Running " << name << " Using Data Type: " << type
                  << "With Array Size: " << size << "..." << std::endl;
        try {
          double avgTime = runTrial(func, type, size);
          csvFile << name << "," << TYPE_LOOK_UP[type] << "," << size << ","
                  << avgTime << std::endl;
        } catch (std::runtime_error &e) {
          csvFile << name << "," << TYPE_LOOK_UP[type] << "," << size << ","
                  << "FAILED BECAUSE OF MEMORY ALLOCATION ISSUES" << std::endl;
        }
      }

      csvFile << "\n";
    }
    csvFile << "\n";
  }

  csvFile.close();
  return 0;
}
