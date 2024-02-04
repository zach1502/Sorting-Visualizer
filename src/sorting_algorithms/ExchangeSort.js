import _ from 'lodash';

function* exchangeSort(arr) {
  yield _.cloneDeep(arr);
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      arr[i].isComparing = true;
      arr[j].isComparing = true;
      yield _.cloneDeep(arr);

      if (arr[i].value > arr[j].value) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        yield _.cloneDeep(arr);
      }

      arr[i].isComparing = false;
      arr[j].isComparing = false;
    }

    arr[i].isSorted = true;
  }
  arr[n - 1].isSorted = true;
  yield _.cloneDeep(arr);
}

export default exchangeSort;
