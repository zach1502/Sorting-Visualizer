#pragma once

#include <string>
#include <vector>

// Include all sorting headers
#include "BubbleSort.hpp"
#include "CocktailShakerSort.hpp"
#include "InsertionSort.hpp"
#include "IntroSort.hpp"
#include "MergeSort.hpp"
#include "QuickSortHoare.hpp"
#include "QuickSortLomuto.hpp"
#include "RadixSort.hpp"
#include "SelectionSort.hpp"
#include "HeapSort.hpp"
#include "TreeSort.hpp"
#include "BlockSort.hpp"
#include "ShellSort.hpp"
#include "TimSort.hpp"
#include "ExchangeSort.hpp"
#include "CycleSort.hpp"
#include "PatienceSort.hpp"
#include "SmoothSort.hpp"
#include "StrandSort.hpp"

const int FULL_TEST = 1<<28; // for n log(n) or better
const int SMALL_TEST = 1<<18; // for anything worse

const std::vector<std::tuple<std::string, void (*)(std::vector<int> &), int>>
    algorithms = {
        {"RadixSort", RadixSort, 1<<28},
        {"BubbleSort", BubbleSort, 1<<18},
        {"SelectionSort", SelectionSort, 1<<18},
        {"InsertionSort", InsertionSort, 1<<18},
        {"QuickSortLomuto", QuickSortLomuto, 1<<28},
        {"QuickSortHoare", QuickSortHoare, 1<<28},
        {"MergeSort", MergeSort, 1<<28},
        {"CocktailShakerSort", CocktailShakerSort, 1<<18},
        {"IntroSort", IntroSort, 1<<28},
        {"HeapSort", HeapSort, 1<<28},
        {"TreeSort", TreeSort, 1<<28},
        {"BlockSort", BlockSort, 1<<28},
        {"ShellSort", ShellSort, 1<<28},
        {"TimSort", TimSort, 1<<28},
        {"ExchangeSort", ExchangeSort, 1<<18},
        {"CycleSort", CycleSort, 1<<18},
        {"PatienceSort", PatienceSort, 1<<28},
        {"SmoothSort", SmoothSort, 1<<28},
        {"StrandSort", StrandSort, 1<<28},
};