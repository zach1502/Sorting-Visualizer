import _ from 'lodash';

function* insertionSort(arr, left, right) {
  arr[left].isSorted = true;
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    key.isComparing = true;
    yield _.cloneDeep(arr);

    let j = i - 1;
    while (j >= left && arr[j].value > key.value) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;

    key.isComparing = false;
    key.isSorted = true;
    yield _.cloneDeep(arr);
  }
}

function* maxHeapify(arr, n, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;
  if (l < n && arr[l].value > arr[i].value) {
    largest = l;
  }
  if (r < n && arr[r].value > arr[largest].value) {
    largest = r;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    yield _.cloneDeep(arr);
    yield* maxHeapify(arr, n, largest);
  }
}

function* heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* maxHeapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
    yield* maxHeapify(arr, i, 0);
  }
}

function* partition(arr, low, high) {
  const pivot = arr[high].value;
  arr[high].isPartition = true;
  let i = low;
  for (let j = low; j <= high; j++) {
    const item = arr[j];
    item.isComparing = true;
    yield _.cloneDeep(arr);

    if (arr[j].value < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }

    item.isComparing = false;
    yield _.cloneDeep(arr);
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  arr[i].isPartition = false;
  arr[i].isSorted = true;
  yield _.cloneDeep(arr);
  return i;
}

function* introsortUtil(arr, begin, end, depthLimit) {
  if (end - begin <= 16) {
    yield* insertionSort(arr, begin, end);
    return;
  }

  if (depthLimit === 0) {
    yield* heapSort(arr.slice(begin, end + 1));
    return;
  }

  const pivot = yield* partition(arr, begin, end);
  yield* introsortUtil(arr, begin, pivot - 1, depthLimit - 1);
  yield* introsortUtil(arr, pivot + 1, end, depthLimit - 1);
}

function* introsort(arr) {
  const depthLimit = 2 * Math.floor(Math.log(arr.length) / Math.LN2);
  yield* introsortUtil(arr, 0, arr.length - 1, depthLimit);
  for (let item of arr) {
    item.isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default introsort;
