import _ from "lodash";

function* bubbleSort(arr) {
  yield _.cloneDeep(arr);
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      arr[j].isComparing = true;
      arr[j + 1].isComparing = true;

      yield _.cloneDeep(arr);

      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        yield _.cloneDeep(arr);
        swapped = true;
      }

      arr[j].isComparing = false;
      arr[j + 1].isComparing = false;
    }
    arr[n - i - 1].isSorted = true;
    yield _.cloneDeep(arr);

    if (!swapped) {
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    arr[i].isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default bubbleSort;
