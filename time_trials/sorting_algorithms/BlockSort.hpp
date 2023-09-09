#pragma once

#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

void blockSortInsertionSort(std::vector<int>& arr, int start, int end) {
  for (int i = start + 1; i < end; i++) {
    int key = arr[i];
    int j = i - 1;

    while (j >= start && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

void blockSortMerge(std::vector<int>& arr, int start, int mid, int end) {
  int i = start, j = mid, k = 0;
  int bufferSize = end - start;
  std::vector<int> buffer(bufferSize);

  while (i < mid && j < end) {
    if (arr[i] <= arr[j]) {
      buffer[k++] = arr[i++];
    } else {
      buffer[k++] = arr[j++];
    }
  }

  while (i < mid) {
    buffer[k++] = arr[i++];
  }

  while (j < end) {
    buffer[k++] = arr[j++];
  }

  for (i = start, k = 0; i < end; i++, k++) {
    arr[i] = buffer[k];
  }
}

void BlockSort(std::vector<int>& arr) {
  int n = arr.size();
  int blockSize = static_cast<int>(std::sqrt(n));

  for (int i = 0; i < n; i += blockSize) {
    blockSortInsertionSort(arr, i, std::min(i + blockSize, n));
  }

  for (int size = blockSize; size < n; size *= 2) {
    for (int leftStart = 0; leftStart < n; leftStart += 2 * size) {
      int rightStart = std::min(leftStart + size, n);
      int rightEnd = std::min(leftStart + 2 * size, n);

      if (rightEnd - rightStart > 0) {
        blockSortMerge(arr, leftStart, rightStart, rightEnd);
      }
    }
  }
}
