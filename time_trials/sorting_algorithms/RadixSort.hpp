#pragma once

#include <algorithm>
#include <vector>

int getMax(const std::vector<int>& arr) {
  return *std::max_element(arr.begin(), arr.end());
}

// Counting sort sub-routine
void countingSortByDigit(std::vector<int>& arr, long long exp) {
  int n = arr.size();

  std::vector<int> output(n);
  std::vector<int> count(10, 0);

  for (int i = 0; i < n; i++) {
    count[(arr[i] / exp) % 10]++;
  }

  for (int i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (int i = n - 1; i >= 0; i--) {
    output[count[(arr[i] / exp) % 10] - 1] = arr[i];
    count[(arr[i] / exp) % 10]--;
  }

  for (int i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

void RadixSort(std::vector<int>& arr) {
  int maxVal = getMax(arr);
  for (long long exp = 1; maxVal / exp > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }
}
