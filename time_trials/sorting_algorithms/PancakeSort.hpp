#pragma once

#include <algorithm>
#include <vector>

void flip(std::vector<int>& arr, size_t i) {
  std::reverse(arr.begin(), arr.begin() + i + 1);
}

size_t findMaxIndex(const std::vector<int>& arr, size_t n) {
  size_t maxIndex = 0;
  for (size_t i = 1; i < n; ++i) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

void PancakeSort(std::vector<int>& arr) {
  if (arr.empty()) {
    return;
  }

  for (size_t currSize = arr.size(); currSize > 1; --currSize) {
    size_t maxIndex = findMaxIndex(arr, currSize);
    if (maxIndex != currSize - 1) {
      flip(arr, maxIndex);
      flip(arr, currSize - 1);
    }
  }
}
