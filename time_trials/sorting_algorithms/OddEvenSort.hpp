#pragma once

#include <iostream>
#include <vector>

void OddEvenSort(std::vector<int>& arr) {
  bool isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (int i = 1; i < arr.size() - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        std::swap(arr[i], arr[i + 1]);
        isSorted = false;
      }
    }

    for (int i = 0; i < arr.size() - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        std::swap(arr[i], arr[i + 1]);
        isSorted = false;
      }
    }
  }
}