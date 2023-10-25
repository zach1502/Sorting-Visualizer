#pragma once

#include <iostream>
#include <vector>

void insertionSort(std::vector<int> &array, int start, int end) {
  for (int i = start + 1; i <= end; ++i) {
    int key = array[i];
    int j = i - 1;

    while (j >= start && array[j] > key) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
}

void bucketSort(std::vector<int> &array, int start, int end, int divisor) {
  if (start >= end) return;

  const int numBuckets = 256;  // Using 256 buckets
  std::vector<std::vector<int>> buckets(numBuckets);

  for (int i = start; i <= end; ++i) {
    int index = (array[i] / divisor) % numBuckets;
    buckets[index].push_back(array[i]);
  }

  int idx = start;
  for (auto &bucket : buckets) {
    if (bucket.size() > 1) {
      // Using insertion sort for small arrays
      if (bucket.size() < 10) {
        insertionSort(bucket, 0, bucket.size() - 1);
      } else {
        int maxElement = *max_element(bucket.begin(), bucket.end());
        int nextDivisor = divisor * numBuckets;
        if (maxElement / nextDivisor > 0) {
          // Recursively sort using bucket sort if elements have more digits
          bucketSort(bucket, 0, bucket.size() - 1, nextDivisor);
        }
      }
    }

    // Copy bucket back to original array
    for (int value : bucket) {
      array[idx++] = value;
    }
  }
}

void SpreadSort(std::vector<int> &array) {
  if (array.empty()) return;

  int maxElement = *max_element(array.begin(), array.end());
  if (maxElement > 0) {
    bucketSort(array, 0, array.size() - 1, 1);
  }
}