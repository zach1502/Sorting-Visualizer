#pragma once

#include <algorithm>
#include <vector>

int hoarePartition(std::vector<int>& arr, int low, int high) {
  int pivot = arr[low];
  int i = low - 1;
  int j = high + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    std::swap(arr[i], arr[j]);
  }
}

void quickSortHoare(std::vector<int>& arr, int low, int high) {
  if (low < high) {
    int pIndex = hoarePartition(arr, low, high);

    quickSortHoare(arr, low, pIndex);
    quickSortHoare(arr, pIndex + 1, high);
  }
}

void QuickSortHoare(std::vector<int>& arr) {
  quickSortHoare(arr, 0, arr.size() - 1);
}
