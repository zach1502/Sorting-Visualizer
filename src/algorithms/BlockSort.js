import _ from 'lodash';

function* insertionSort(arr, start, end) {
  for (let i = start + 1; i < end; i++) {
    const key = arr[i];
    key.isComparing = true;
    let j = i - 1;

    while (j >= start && arr[j].value > key.value) {
      arr[j + 1] = arr[j];
      arr[j].isComparing = true;
      yield _.cloneDeep(arr);
      arr[j].isComparing = false;
      j--;
    }
    arr[j + 1] = key;
    key.isComparing = false;
    yield _.cloneDeep(arr);
  }
}

function* merge(arr, start, mid, end, buffer) {
  let i = start;
  let j = mid;
  let k = 0;

  while (i < mid && j < end) {
    arr[i].isComparing = true;
    arr[j].isComparing = true;
    yield _.cloneDeep(arr);

    if (arr[i].value <= arr[j].value) {
      buffer[k++] = arr[i++];
    } else {
      buffer[k++] = arr[j++];
    }

    if (arr[i - 1]) arr[i - 1].isComparing = false;
    if (arr[j - 1]) arr[j - 1].isComparing = false;
  }

  while (i < mid) {
    buffer[k++] = arr[i++];
  }

  while (j < end) {
    buffer[k++] = arr[j++];
  }

  for (i = start, k = 0; i < end; i++, k++) {
    arr[i] = buffer[k];
    yield _.cloneDeep(arr);
  }
}

function* blockSort(arr) {
  const n = arr.length;
  const blockSize = Math.floor(Math.sqrt(n));
  const buffer = new Array(blockSize);

  for (let i = 0; i < n; i += blockSize) {
    yield* insertionSort(arr, i, Math.min(i + blockSize, n));
  }

  for (let size = blockSize; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      const rightStart = Math.min(leftStart + size, n);
      const rightEnd = Math.min(leftStart + 2 * size, n);

      if (rightEnd - rightStart > 0) {
        yield* merge(arr, leftStart, rightStart, rightEnd, buffer);
      }
    }
  }

  for (let item of arr) {
    item.isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default blockSort;
