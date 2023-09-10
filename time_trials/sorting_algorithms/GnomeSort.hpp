#pragma once

#include <iostream>
#include <vector>

void GnomeSort(std::vector<int>& arr) {
    int n = arr.size();
    int index = 0;

    while (index < n) {
        if (index == 0)
            index++;

        if (arr[index] >= arr[index - 1])
            index++;
        else {
            std::swap(arr[index], arr[index - 1]);
            index--;
        }
    }
}