#pragma once

#include <algorithm>
#include <vector>

int partition(std::vector<int>& arr, int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      std::swap(arr[i], arr[j]);
    }
  }

  std::swap(arr[i + 1], arr[high]);
  return (i + 1);
}

void quickSortLomuto(std::vector<int>& arr, int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);

    quickSortLomuto(arr, low, pi - 1);
    quickSortLomuto(arr, pi + 1, high);
  }
}

void QuickSortLomuto(std::vector<int>& arr) { quickSortLomuto(arr, 0, arr.size() - 1); }
