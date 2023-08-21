import _ from 'lodash';

// Define the Leonardo numbers
function leonardo(k) {
  if (k < 2) {
    return 1;
  }
  return leonardo(k - 1) + leonardo(k - 2) + 1;
}

// Build the Leonardo heap by merging
// pairs of adjacent trees
function* heapify(arr, start, end) {
  let i = start;
  let j = 0;
  let k = 0;

  while (k < end - start + 1) {
    if (k & 0xAAAAAAAA) {
      j = j + i;
      i = i >> 1;
    } else {
      i = i + j;
      j = j >> 1;
    }

    k = k + 1;
  }

  while (i > 0) {
    j = j >> 1;
    k = i + j;
    while (k < end) {
      arr[k].isComparing = true;
      arr[k - i].isComparing = true;

      yield _.cloneDeep(arr);

      if (arr[k].value > arr[k - i].value) {
        arr[k].isComparing = false;
        arr[k - i].isComparing = false;
        break;
      }

      [arr[k], arr[k - i]] = [arr[k - i], arr[k]];

      arr[k].isComparing = false;
      arr[k - i].isComparing = false;

      yield _.cloneDeep(arr);

      k = k + i;
    }

    i = j;
  }
}

// Smooth Sort function
function* smoothSort(arr) {
  yield _.cloneDeep(arr);
  const n = arr.length;

  let p = n - 1;
  let q = p;
  let r = 0;

  // Build the Leonardo heap by merging
  // pairs of adjacent trees
  while (p > 0) {
    if ((r & 0x03) == 0) {
      yield* heapify(arr, r, q);
    }

    if (leonardo(r) == p) {
      r = r + 1;
    } else {
      r = r - 1;
      q = q - leonardo(r);
      yield* heapify(arr, r, q);
      q = r - 1;
      r = r + 1;
    }

    arr[0].isComparing = true;
    arr[p].isComparing = true;

    [arr[0], arr[p]] = [arr[p], arr[0]];

    yield _.cloneDeep(arr);

    arr[0].isComparing = false;
    arr[p].isComparing = false;

    p = p - 1;
  }

  // Convert the Leonardo heap
  // back into an array
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    while (j > 0 && arr[j].value < arr[j - 1].value) {
      arr[j].isComparing = true;
      arr[j - 1].isComparing = true;

      yield _.cloneDeep(arr);

      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

      arr[j].isComparing = false;
      arr[j - 1].isComparing = false;

      arr[j].isSorted = true;
      arr[j-1].isSorted = true;

      yield _.cloneDeep(arr);

      j = j - 1;
    }
  }

  yield _.cloneDeep(arr);
}

export default smoothSort;
