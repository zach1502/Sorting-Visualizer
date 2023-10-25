#pragma once

#include <vector>
#include <iostream>

void compareAndSwap(std::vector<int>& arr, int i, int j, bool dir) {
    if (dir == (arr[i] > arr[j])) {
        std::swap(arr[i], arr[j]);
    }
}

void bitonicMerge(std::vector<int>& arr, int low, int cnt, bool dir) {
    for (int k = cnt / 2; k > 0; k /= 2) {
        for (int i = low; i + k < low + cnt; i++) {
            compareAndSwap(arr, i, i + k, dir);
        }
    }
}

void bitonicSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int k = 2; k <= n; k *= 2) {
        for (int j = k / 2; j > 0; j /= 2) {
            for (int i = 0; i < n; i++) {
                int l = i ^ j;
                if (l > i) {
                    if (((i & k) == 0 && arr[i] > arr[l]) || ((i & k) != 0 && arr[i] < arr[l])) {
                        std::swap(arr[i], arr[l]);
                    }
                }
            }
        }
    }
}