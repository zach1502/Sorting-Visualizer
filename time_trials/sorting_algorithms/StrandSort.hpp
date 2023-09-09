#pragma once

#include <iostream>
#include <vector>

std::vector<int> merge(const std::vector<int>& a, const std::vector<int>& b) {
  std::vector<int> result;

  unsigned long i = 0, j = 0;
  while (i < a.size() && j < b.size()) {
    if (a[i] < b[j]) {
      result.push_back(a[i]);
      i++;
    } else {
      result.push_back(b[j]);
      j++;
    }
  }

  while (i < a.size()) {
    result.push_back(a[i]);
    i++;
  }

  while (j < b.size()) {
    result.push_back(b[j]);
    j++;
  }

  return result;
}

void StrandSort(std::vector<int>& input) {
  std::vector<int> result;

  while (!input.empty()) {
    std::vector<int> sublist;
    sublist.push_back(input[0]);
    input.erase(input.begin());

    for (auto it = input.begin(); it != input.end();) {
      if (*it >= sublist.back()) {
        sublist.push_back(*it);
        it = input.erase(it);
      } else {
        it++;
      }
    }

    result = merge(result, sublist);
  }

  input = result;
}