#pragma once

#include <iostream>
#include <mutex>
#include <thread>
#include <vector>

void compareAndSwap(std::vector<int>& arr, int i, int j, bool& localIsSorted) {
  if (arr[i] > arr[j]) {
    std::swap(arr[i], arr[j]);
    localIsSorted = false;
  }
}

void OddEvenSortMultiThreading(std::vector<int>& arr) {
  int n = arr.size();
  bool isSorted = false;

  while (!isSorted) {
    isSorted = true;

    std::vector<std::thread> threads;

    for (int i = 1; i < n - 1; i += 2) {
      threads.push_back(std::thread(compareAndSwap, std::ref(arr), i, i + 1, std::ref(isSorted)));
    }
    for (auto& th : threads) th.join();
    threads.clear();

    for (int i = 0; i < n - 1; i += 2) {
      threads.push_back(std::thread(compareAndSwap, std::ref(arr), i, i + 1, std::ref(isSorted)));
    }
    for (auto& th : threads) th.join();
    threads.clear();
  }
}