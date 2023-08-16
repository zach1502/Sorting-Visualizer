import _ from "lodash";

function* bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      arr[j].isComparing = true;
      arr[j + 1].isComparing = true;

      yield _.cloneDeep(arr);

      arr[j].isComparing = false;
      arr[j + 1].isComparing = false;

      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    arr[n - i - 1].isSorted = true;
    yield _.cloneDeep(arr);
  }

  arr[0].isSorted = true;
  yield _.cloneDeep(arr);
}

export default bubbleSort;
