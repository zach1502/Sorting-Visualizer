#pragma once

#include <algorithm>
#include <vector>

void BucketSort(std::vector<int>& arr) {
  if (arr.empty()) {
    return;
  }

  int minValue = *std::min_element(arr.begin(), arr.end());
  int maxValue = *std::max_element(arr.begin(), arr.end());

  size_t bucketCount = arr.size();
  std::vector<std::vector<int>> buckets(bucketCount);

  for (int num : arr) {
    size_t index =
        static_cast<size_t>(bucketCount * (static_cast<float>(num - minValue) /
                                           (maxValue - minValue)));
    if (index == bucketCount) {
      index--;
    }
    buckets[index].push_back(num);
  }

  arr.clear();
  for (auto& bucket : buckets) {
    std::sort(bucket.begin(),
              bucket.end());
    arr.insert(arr.end(), bucket.begin(), bucket.end());
  }
}
