#include <iostream>
#include <algorithm>
#include <climits>
#include <random>
#include <vector>

#include "sorting_algorithms/BubbleSort.hpp"
#include "sorting_algorithms/InsertionSort.hpp"
#include "sorting_algorithms/QuickSortHoare.hpp"
#include "sorting_algorithms/QuickSortLomuto.hpp"
#include "sorting_algorithms/SelectionSort.hpp"

bool vectorIsEqual(const std::vector<int> &lhs, const std::vector<int> &rhs) {
  if (lhs.size() != rhs.size()) {
    return false;
  }

  for (size_t i = 0; i < lhs.size(); i++) {
    if (lhs[i] != rhs[i]) {
      return false;
    }
  }

  return true;
}

void generateRandomData(size_t size, std::vector<int> &data) {
  std::random_device rd;
  std::mt19937 gen(rd());
  std::uniform_int_distribution<> distrib(0, INT_MAX);

  for (size_t i = 0; i < size; i++) {
    data[i] = distrib(gen);
  }
}

// test for all sorting algorithms
int main() {
  std::vector<std::pair<std::string, void (*)(std::vector<int> &)>> algorithms =
      {
          {"BubbleSort", BubbleSort},
          {"SelectionSort", SelectionSort},
          {"InsertionSort", InsertionSort},
          {"QuickSortLomuto", QuickSortLomuto},
          {"QuickSortHoare", QuickSortHoare},
      };

  std::vector<int> data(100);
  generateRandomData(data.size(), data);

  std::vector<int> sortedData(data);
  std::sort(sortedData.begin(), sortedData.end());

  bool isFailed = false;

  for (auto &[name, algorithm] : algorithms) {
    std::vector<int> dataCopy(data);
    algorithm(dataCopy);

    if (vectorIsEqual(dataCopy, sortedData)) {
      std::cout << name << " passed" << std::endl;
    } else {
      std::cout << name << " failed" << std::endl;
      isFailed = true;
    }
  }

  return isFailed ? EXIT_FAILURE : EXIT_SUCCESS;
}