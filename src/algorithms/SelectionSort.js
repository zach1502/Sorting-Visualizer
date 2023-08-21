import _ from 'lodash';

function* selectionSort(arr) {
  yield _.cloneDeep(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    arr[minIndex].isComparing = true;

    for (let j = i + 1; j < arr.length; j++) {
      arr[j].isComparing = true;
      yield _.cloneDeep(arr);

      if (arr[j].value < arr[minIndex].value) {
        arr[minIndex].isComparing = false;
        minIndex = j;
        arr[minIndex].isComparing = true;
      }

      yield _.cloneDeep(arr);
      arr[j].isComparing = false
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      yield _.cloneDeep(arr);
    }

    arr[minIndex].isComparing = false;
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
  }

  arr[arr.length - 1].isSorted = true;
  yield _.cloneDeep(arr);
}

export default selectionSort;
