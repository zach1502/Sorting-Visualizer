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
#include "CombSort.hpp"
#include "GnomeSort.hpp"
#include "OddEvenSort.hpp"
#include "OddEvenSortMultithreading.hpp"
#include "PigeonholeSort.hpp"
#include "BucketSort.hpp"

const std::vector<std::pair<std::string, void (*)(std::vector<int> &)>>
    algorithms = {
        {"RadixSort", RadixSort},
        {"BubbleSort", BubbleSort},
        {"SelectionSort", SelectionSort},
        {"InsertionSort", InsertionSort},
        {"QuickSortLomuto", QuickSortLomuto},
        {"QuickSortHoare", QuickSortHoare},
        {"MergeSort", MergeSort},
        {"CocktailShakerSort", CocktailShakerSort},
        {"IntroSort", IntroSort},
        {"HeapSort", HeapSort},
        {"TreeSort", TreeSort},
        {"BlockSort", BlockSort},
        {"ShellSort", ShellSort},
        {"TimSort", TimSort},
        {"ExchangeSort", ExchangeSort},
        {"CycleSort", CycleSort},
        {"PatienceSort", PatienceSort},
        {"SmoothSort", SmoothSort},
        {"StrandSort", StrandSort},
        {"CombSort", CombSort},
        {"GnomeSort", GnomeSort},
        {"OddEvenSort", OddEvenSort},
        {"OddEvenSortMultithreading", OddEvenSortMultiThreading},
        {"PigeonholeSort", PigeonholeSort},
        {"BucketSort", BucketSort},
};