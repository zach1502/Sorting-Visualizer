#pragma once

#include <algorithm>
#include <random>
#include <vector>

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