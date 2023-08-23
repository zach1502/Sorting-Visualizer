import _ from 'lodash';

function* pancakeSort(arr) {
  for (let size = arr.length; size > 1; size--) {
    // Find the index of the maximum element in the unsorted part of the array
    let maxIndex = 0;
    for (let i = 1; i < size; i++) {
      arr[i].isComparing = true;
      arr[maxIndex].isComparing = true;
      yield _.cloneDeep(arr);
      if (arr[i].value > arr[maxIndex].value) {
        arr[maxIndex].isComparing = false; // Reset previous max
        maxIndex = i;
      } else {
        arr[i].isComparing = false;
      }
      yield _.cloneDeep(arr);
    }

    // Flip the max element to the front if it's not already there
    if (maxIndex !== 0) {
      yield* flip(arr, maxIndex + 1);
    }

    // Flip the max element to its correct place
    yield* flip(arr, size);

    // Mark the element as sorted
    arr[size - 1].isSorted = true;
    arr[size - 1].isComparing = false;
  }

  arr[0].isSorted = true; // The last element is also sorted
  yield _.cloneDeep(arr);
}

function* flip(arr, k) {
  let left = 0;
  let right = k - 1;
  while (left < right) {
      arr[left].isComparing = true;
      arr[right].isComparing = true;
      yield _.cloneDeep(arr);
      [arr[left], arr[right]] = [arr[right], arr[left]];
      arr[left].isComparing = false;
      arr[right].isComparing = false;

      left++;
      right--;
  }
}

export default pancakeSort;
