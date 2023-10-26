#pragma once

#include <string>
#include <vector>

// Include all sorting headers
#include "BitonicSort.hpp"
#include "BlockSort.hpp"
#include "BubbleSort.hpp"
#include "BucketSort.hpp"
#include "CocktailShakerSort.hpp"
#include "CombSort.hpp"
#include "CountingSort.hpp"
#include "CycleSort.hpp"
#include "ExchangeSort.hpp"
#include "GnomeSort.hpp"
#include "HeapSort.hpp"
#include "ICantBelieveItCanSort.hpp"
#include "InsertionSort.hpp"
#include "IntroSort.hpp"
#include "MergeSort.hpp"
#include "OddEvenSort.hpp"
#include "OddEvenSortMultithreading.hpp"
#include "PancakeSort.hpp"
#include "PatienceSort.hpp"
#include "PigeonholeSort.hpp"
#include "QuickSortHoare.hpp"
#include "QuickSortLomuto.hpp"
#include "RadixSort.hpp"
#include "SelectionSort.hpp"
#include "ShellSort.hpp"
#include "SmoothSort.hpp"
#include "SpreadSort.hpp"
#include "StrandSort.hpp"
#include "TimSort.hpp"
#include "TreeSort.hpp"

const std::vector<std::pair<std::string, void (*)(std::vector<int> &)>>
    algorithms = {{"RadixSort", RadixSort},
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
                  {"CountingSort", CountingSort},
                  {"SpreadSort", SpreadSort},
                  {"PancakeSort", PancakeSort},
                  {"ICantBelieveItCanSort", ICantBelieveItCanSort},
                  {"BitonicSort", BitonicSort}};