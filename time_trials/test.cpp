#include <iostream>
#include <algorithm>
#include <climits>
#include <random>
#include <vector>

#include "sorting_algorithms/AllAlgorithms.hpp"
#include "utils/DataGeneration.hpp"

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


// test for all sorting algorithms
int main() {

  std::vector<int> data(128);
  generateRandomData(data.size(), data);

  std::vector<int> sortedData(data);
  std::sort(sortedData.begin(), sortedData.end());

  bool isFailed = false;

  for (auto &[name, algorithm] : algorithms) {
    std::vector<int> dataCopy(data);
    try {
      algorithm(dataCopy);
    } catch (std::exception &e) {
      std::cout << name << " failed with exception: " << e.what() << std::endl;
      isFailed = true;
      continue;
    }

    if (vectorIsEqual(dataCopy, sortedData)) {
      std::cout << name << " passed" << std::endl;
    } else {
      std::cout << name << " failed" << std::endl;
      isFailed = true;
    }
  }

  return isFailed ? EXIT_FAILURE : EXIT_SUCCESS;
}