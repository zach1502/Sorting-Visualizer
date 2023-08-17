import _ from 'lodash';

function* mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    yield* mergeSort(arr, left, mid);
    yield* mergeSort(arr, mid + 1, right);
    yield* merge(arr, left, mid, right);
  }
}

function* merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  let i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {

    L[i].isComparing = true;
    R[j].isComparing = true;
    yield _.cloneDeep(arr);

    L[i].isComparing = false;
    R[j].isComparing = false;

    if (L[i].value <= R[j].value) {
      arr[k] = L[i];
      if(left === 0 && right === arr.length-1){
        arr[k].isSorted = true;
      }
      i++;
    } else {
      arr[k] = _.cloneDeep(R[j]);
      if(left === 0 && right === arr.length-1){
        arr[k].isSorted = true;
      }
      j++;
    }

    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    if(left === 0 && right === arr.length-1){
      arr[k].isSorted = true;
      yield _.cloneDeep(arr);
    }

    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    if(left === 0 && right === arr.length-1){
      arr[k].isSorted = true;
      yield _.cloneDeep(arr);
    }

    j++;
    k++;
  }
}

export default mergeSort;
