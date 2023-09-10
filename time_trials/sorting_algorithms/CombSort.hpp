#pragma once

#include <iostream>
#include <vector>

void CombSort(std::vector<int>& arr) {
  int n = arr.size();
  int gap = n;
  bool swapped = true;

  const float shrinkFactor = 1.3;

  while (gap != 1 || swapped == true) {
    gap = static_cast<int>(gap / shrinkFactor);
    if (gap < 1) {
      gap = 1;
    }

    swapped = false;

    for (int i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        std::swap(arr[i], arr[i + gap]);
        swapped = true;
      }
    }
  }
}
