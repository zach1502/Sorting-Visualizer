import _ from 'lodash';


function* insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let j = i;
    arr[j].isComparing = true;
    yield _.cloneDeep(arr);

    while (j > left && arr[j - 1].value > arr[j].value) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      yield _.cloneDeep(arr);
      j--;
    }

    arr[j].isComparing = false;
    yield _.cloneDeep(arr);
  }
}

function* merge(arr, l, m, r) {
  let len1 = m - l + 1, len2 = r - m;
  let left = new Array(len1), right = new Array(len2);
  for (let x = 0; x < len1; x++) {
    left[x] = arr[l + x];
  }
  for (let x = 0; x < len2; x++) {
    right[x] = arr[m + 1 + x];
  }

  yield _.cloneDeep(arr);

  let i = 0, j = 0, k = l;
  while (i < len1 && j < len2) {

    left[i].isComparing = true;
    right[j].isComparing = true;
    yield _.cloneDeep(arr);
    left[i].isComparing = false;
    right[j].isComparing = false;

    if (left[i].value <= right[j].value) {
      arr[k] = left[i];
      if(l === 0 && r === arr.length-1){
        arr[k].isSorted = true;
      }

      i++;
    } else {
      arr[k] = _.cloneDeep(right[j]);
      if(l === 0 && r === arr.length-1){
        arr[k].isSorted = true;
      }
      j++;
    }

    k++;
  }
  while (i < len1) {
    arr[k] = left[i];
    if(l === 0 && r === arr.length-1){
      arr[k].isSorted = true;
      yield _.cloneDeep(arr);
    }
    k++;
    i++;
  }

  while (j < len2) {
    arr[k] = right[j];
    if(l === 0 && r === arr.length-1){
      arr[k].isSorted = true;
      yield _.cloneDeep(arr);
    }
    k++;
    j++;
  }
}

function* timsort(arr) {
  yield _.cloneDeep(n);
  const n = arr.length;
  const RUN = Math.ceil(Math.sqrt(n));
  for (let i = 0; i < n; i += RUN) {
    yield* insertionSort(arr, i, Math.min((i + RUN - 1), (n - 1)));
  }
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min((left + 2 * size - 1), (n - 1));

      if (mid < right) {
        yield* merge(arr, left, mid, right);
      }
    }
  }
}

export default timsort;
