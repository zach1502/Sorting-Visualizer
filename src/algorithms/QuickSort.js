// src/algorithms/quickSort.js

function* quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  let pivot = arr[Math.floor((left + right) / 2)].value;
  let index = yield* partition(arr, left, right, pivot);

  yield* quickSort(arr, left, index - 1);
  yield* quickSort(arr, index, right);
}

function* partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left].value < pivot) {
      left++;
    }

    while (arr[right].value > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      arr[left].isComparing = true;
      arr[right].isComparing = true;
      yield arr.slice();
      arr[left].isComparing = false;
      arr[right].isComparing = false;

      left++;
      right--;
    }
  }
  return left;
}

export default quickSort;
