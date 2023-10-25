#pragma once

#include <vector>

void ICantBelieveItCanSort(std::vector<int>& arr) {
  if (arr.empty()) {
    return;
  }

  for (size_t i = 0; i < arr.size(); ++i) {
    for (size_t j = 0; j < arr.size(); ++j) {
      if (arr[i] < arr[j]) {
        std::swap(arr[i], arr[j]);
      }
    }
  }
}