#pragma once

#include <vector>
#include <string>

// Include all sorting headers
#include "BubbleSort.hpp"
#include "InsertionSort.hpp"
#include "QuickSortHoare.hpp"
#include "QuickSortLomuto.hpp"
#include "SelectionSort.hpp"
#include "CocktailShakerSort.hpp"

  std::vector<std::pair<std::string, void (*)(std::vector<int> &)>> algorithms =
      {
          {"BubbleSort", BubbleSort},
          {"SelectionSort", SelectionSort},
          {"InsertionSort", InsertionSort},
          {"QuickSortLomuto", QuickSortLomuto},
          {"QuickSortHoare", QuickSortHoare},
          {"CocktailShakerSort", CocktailShakerSort},
      };