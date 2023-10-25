#pragma once

#include <vector>
#include <algorithm>
#include <iterator>

template <typename RandomAccessIterator>
void insertionSort(RandomAccessIterator first, RandomAccessIterator last) {
  if (first == last) return;
  for (RandomAccessIterator i = first + 1; i != last; ++i) {
    auto key = std::move(*i);
    RandomAccessIterator j = i;
    while (j > first && *(j - 1) > key) {
      *j = std::move(*(j - 1));
      --j;
    }
    *j = std::move(key);
  }
}

template <typename T>
void combineBuckets(std::vector<T>& array, std::vector<std::vector<T>>& buckets) {
  size_t index = 0;
  for (auto& bucket : buckets) {
    for (auto& element : bucket) {
      array[index++] = std::move(element);
    }
  }
}

template <typename RandomAccessIterator>
void spreadSort(RandomAccessIterator first, RandomAccessIterator last) {
  if (std::distance(first, last) < 2)
    return;

  auto min_max = std::minmax_element(first, last);
  auto min_val = *min_max.first;
  auto max_val = *min_max.second;

  if (min_val == max_val)
    return; // The array is already sorted

  size_t bucket_count = std::distance(first, last);
  std::vector<std::vector<typename std::iterator_traits<RandomAccessIterator>::value_type>> buckets(bucket_count);

  for (auto it = first; it != last; ++it) {
    size_t index = bucket_count * (*it - min_val) / (max_val - min_val);
    buckets[index].push_back(std::move(*it));
  }

  for (auto& bucket : buckets) {
    if (bucket.size() > 1) {
      spreadSort(bucket.begin(), bucket.end());
    } else if (bucket.size() == 1) {
      insertionSort(bucket.begin(), bucket.end());
    }
  }

  combineBuckets(*first, buckets);
}

// since it is supposed to be efficient at sorting ints AND floats, I'm going to honor the fact that it can.
template <typename T>
void spreadSort(std::vector<T>& array) {
  if (array.size() < 2) return;
  spreadSort(array.begin(), array.end());
}
