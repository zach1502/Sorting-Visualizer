import _ from 'lodash';

function* insertionSort(arr) {
  yield _.cloneDeep(arr);
  arr[0].isSorted = true;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    key.isComparing = true;

    let j = i - 1;
    if (j >= 0) arr[j].isComparing = true;
    yield _.cloneDeep(arr);
    if (j >= 0) arr[j].isComparing = false;

    while (j >= 0 && arr[j].value > key.value) {
      arr[j + 1] = arr[j];

      if (j - 1 >= 0) arr[j - 1].isComparing = true;
      yield _.cloneDeep(arr);
      if (j - 1 >= 0) arr[j - 1].isComparing = false;

      j = j - 1;
    }
    arr[j + 1] = key;
    key.isComparing = false;
    key.isSorted = true;

    yield _.cloneDeep(arr);
  }

  for (let k = 0; k < arr.length; k++) {
    arr[k].isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default insertionSort;
