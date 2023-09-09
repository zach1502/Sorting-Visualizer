#pragma once

#include <algorithm>
#include <vector>

void CycleSort(std::vector<int>& arr) {
  int writes = 0;

  for (int cycleStart = 0; cycleStart <= arr.size() - 2; ++cycleStart) {
    int item = arr[cycleStart];
    int pos = cycleStart;

    for (int i = cycleStart + 1; i < arr.size(); ++i) {
      if (arr[i] < item) {
        ++pos;
      }
    }

    if (pos == cycleStart) {
      continue;
    }

    while (item == arr[pos]) {
      ++pos;
    }
    std::swap(item, arr[pos]);

    while (pos != cycleStart) {
      pos = cycleStart;
      for (int i = cycleStart + 1; i < arr.size(); ++i) {
        if (arr[i] < item) {
          ++pos;
        }
      }

      while (item == arr[pos]) {
        ++pos;
      }

      std::swap(item, arr[pos]);
    }
  }
}
