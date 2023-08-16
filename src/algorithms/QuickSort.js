import _ from "lodash";

function* quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    arr[left].isSorted = true;
    yield _.cloneDeep(arr);
    return;
  }

  let pivotIndex = Math.floor((left + right) / 2);
  let pivot = arr[pivotIndex].value;

  arr[pivotIndex].isPartition = true;
  yield _.cloneDeep(arr);
  const shallowCopy = arr[pivotIndex];

  let index = yield* partition(arr, left, right, pivot);

  shallowCopy.isPartition = false;
  shallowCopy.isSorted = true;

  yield _.cloneDeep(arr);

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
      yield _.cloneDeep(arr);
      arr[left].isComparing = false;
      arr[right].isComparing = false;

      left++;
      right--;
    }
  }
  return left;
}

export default quickSort;
