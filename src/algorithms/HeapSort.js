import _ from 'lodash';

function* maxHeapify(arr, n, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n) {
    arr[l].isComparing = true;
  }
  if (r < n) {
    arr[r].isComparing = true;
  }
  yield _.cloneDeep(arr);

  if (l < n && arr[l].value > arr[largest].value) {
    largest = l;
  }
  if (r < n && arr[r].value > arr[largest].value) {
    largest = r;
  }

  if (l < n) {
    arr[l].isComparing = false;
  }
  if (r < n) {
    arr[r].isComparing = false;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    yield _.cloneDeep(arr);
    yield* maxHeapify(arr, n, largest);
  }
}

function* buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* maxHeapify(arr, n, i);
  }
}

function* heapSort(arr) {
  yield* buildMaxHeap(arr);
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
    yield* maxHeapify(arr, i, 0);
  }
  arr[0].isSorted = true; // the last element is sorted too
  yield _.cloneDeep(arr);
}

export default heapSort;
