#pragma once

#include <vector>
#include <string>

// Include all sorting headers
#include "BubbleSort.hpp"
#include "InsertionSort.hpp"
#include "QuickSortHoare.hpp"
#include "QuickSortLomuto.hpp"
#include "MergeSort.hpp"
#include "SelectionSort.hpp"
#include "CocktailShakerSort.hpp"
#include "RadixSort.hpp"
#include "IntroSort.hpp"

  const std::vector<std::pair<std::string, void (*)(std::vector<int> &)>> algorithms =
      {
          {"RadixSort", RadixSort},
          // {"BubbleSort", BubbleSort},
          // {"SelectionSort", SelectionSort},
          // {"InsertionSort", InsertionSort},
          {"QuickSortLomuto", QuickSortLomuto},
          {"QuickSortHoare", QuickSortHoare},
          // {"MergeSort", MergeSort},
          // {"CocktailShakerSort", CocktailShakerSort},
          // {"IntroSort", IntroSort},
      };