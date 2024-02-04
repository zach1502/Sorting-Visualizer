import _ from 'lodash';

function* countingSort(arr) {
  yield _.cloneDeep(arr);

  let maxVal = arr[0].value;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].value > maxVal) {
      maxVal = arr[i].value;
    }
  }

  let count = new Array(maxVal + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i].value]++;
    arr[i].isComparing = true;
    yield _.cloneDeep(arr);
    arr[i].isComparing = false;
  }

  let index = 0;

  for (let i = 0; i <= maxVal; i++) {
    while (count[i] > 0) {
      arr[index].value = i;
      arr[index].isSorted = true;
      yield _.cloneDeep(arr);
      index++;
      count[i]--;
    }
  }

  for (let item of arr) {
    item.isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default countingSort;
