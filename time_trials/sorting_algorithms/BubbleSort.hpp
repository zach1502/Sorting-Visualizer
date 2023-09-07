#pragma once

#include <algorithm>  // for std::swap
#include <vector>

void BubbleSort(std::vector<int>& arr) {
  int n = arr.size();

  for (int i = 0; i < n - 1; i++) {
    bool swapped = false;

    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        std::swap(arr[j], arr[j + 1]);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
}
