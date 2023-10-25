#pragma once

#include <algorithm>
#include <vector>

void CountingSort(std::vector<int>& arr) {
  if (arr.empty()) {
    return;
  }

  int minValue = *std::min_element(arr.begin(), arr.end());
  int maxValue = *std::max_element(arr.begin(), arr.end());

  std::vector<int> count(maxValue - minValue + 1, 0);

  for (int num : arr) {
    count[num - minValue]++;
  }

  int index = 0;
  for (int i = 0; i < count.size(); i++) {
    while (count[i] > 0) {
      arr[index++] = i + minValue;
      count[i]--;
    }
  }
}
