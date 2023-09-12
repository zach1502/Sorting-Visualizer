#pragma once

#include <map>
#include <vector>

void PigeonholeSort(std::vector<int>& arr) {
  std::map<int, int> pigeonholes;
  for (int i = 0; i < arr.size(); ++i) {
    ++pigeonholes[arr[i]];
  }
  int i = 0;
  for (auto& [key, value] : pigeonholes) {
    while (value--) {
      arr[i++] = key;
    }
  }
}
