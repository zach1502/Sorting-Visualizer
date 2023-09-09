#pragma once

#include <algorithm>
#include <queue>
#include <vector>

void PatienceSort(std::vector<int>& arr) {
  struct PileElement {
    int value;
    size_t pile_idx;

    bool operator>(const PileElement& other) const {
      return value > other.value;
    }
  };

  std::vector<std::vector<int>> piles;

  for (int num : arr) {
    auto it = std::lower_bound(piles.begin(), piles.end(), num,
                               [](const std::vector<int>& pile, int value) {
                                 return pile.back() < value;
                               });

    if (it == piles.end()) {
      piles.push_back({});
      piles.back().push_back(num);
    } else {
      it->push_back(num);
    }
  }

  std::priority_queue<PileElement, std::vector<PileElement>, std::greater<>> pq;

  for (size_t i = 0; i < piles.size(); i++) {
    pq.push({piles[i].back(), i});
    piles[i].pop_back();
  }

  for (int& x : arr) {
    auto smallest_pile_element = pq.top();
    pq.pop();

    x = smallest_pile_element.value;

    if (!piles[smallest_pile_element.pile_idx].empty()) {
      pq.push({piles[smallest_pile_element.pile_idx].back(),
               smallest_pile_element.pile_idx});
      piles[smallest_pile_element.pile_idx].pop_back();
    }
  }
}
