#include <algorithm>
#include <cmath>
#include <iterator>
#include <vector>

const int SIZE_THRESHOLD = 16;

template <typename RandomAccessIterator>
void insertionSort(RandomAccessIterator first, RandomAccessIterator last) {
  for (auto i = first; i != last; ++i) {
    std::rotate(std::upper_bound(first, i, *i), i, std::next(i));
  }
}

template <typename RandomAccessIterator>
void introSortImpl(RandomAccessIterator first, RandomAccessIterator last,
                   int depth) {
  while (last - first > SIZE_THRESHOLD) {
    if (depth == 0) {
      std::make_heap(first, last);
      std::sort_heap(first, last);
      return;
    }
    auto cut = std::partition(
        first, last, [pivot = *(first + (last - first) / 2)](const auto& elem) {
          return elem < pivot;
        });
    introSortImpl(cut, last, --depth);
    last = cut;
  }
  insertionSort(first, last);
}

template <typename RandomAccessIterator>
void introSort(RandomAccessIterator first, RandomAccessIterator last) {
  if (first != last) {
    introSortImpl(first, last, 2 * std::log2(last - first));
  }
}

void IntroSort(std::vector<int>& arr) { introSort(arr.begin(), arr.end()); }
