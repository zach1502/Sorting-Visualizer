#pragma once

#include <algorithm>
#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
  for (size_t i = 1; i < arr.size(); ++i) {
    int key = arr[i];
    size_t j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = key;
  }
}

void SpreadSort(std::vector<int>& arr) {
  if (arr.empty()) return;

  int maxVal = *std::max_element(arr.begin(), arr.end());
  if (maxVal <= 0) {
    insertionSort(arr);
    return;
  }

  const size_t binRange = 4;
  std::vector<std::vector<int>> buckets(binRange + 1);

  for (const int& item : arr) {
    unsigned long long binIndex = static_cast<unsigned long long>(((unsigned long long)item * binRange) / (unsigned long long)maxVal);
    buckets[binIndex].push_back(item);
  }

  for (std::vector<int> bucket : buckets) {
    for (int item : bucket) {
      std::cout << item << " ";
    }
    std::cout << std::endl;
  }

  const size_t threshold = 16;
  size_t index = 0;

  for (std::vector<int>& bucket : buckets) {
    if (bucket.size() <= threshold) {
      insertionSort(bucket);
    } else {
      SpreadSort(bucket);
    }

    for (const int& item : bucket) {
      arr[index++] = item;
    }
  }
}
