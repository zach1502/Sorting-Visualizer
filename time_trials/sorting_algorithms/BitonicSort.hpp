#pragma once

#include <iostream>
#include <vector>

void BitonicSort(std::vector<int>& arr) {
  unsigned long long int n = arr.size();
  for (unsigned long long int k = 2; k <= n; k *= 2) {
    for (unsigned long long int j = k / 2; j > 0; j /= 2) {
      for (unsigned long long int i = 0; i < n; i++) {
        unsigned long long int l = i ^ j;
        if (l > i) {
          if (((i & k) == 0 && arr[i] > arr[l]) ||
              ((i & k) != 0 && arr[i] < arr[l])) {
            std::swap(arr[i], arr[l]);
          }
        }
      }
    }
  }

  // print arr
  for (int i = 0; i < arr.size(); i++) {
    std::cout << arr[i] << " ";
  }
}
