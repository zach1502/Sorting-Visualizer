import _ from 'lodash';

function* oddEvenSort(arr) {
  yield _.cloneDeep(arr);

  let sorted = false;
  while (!sorted) {
    sorted = true;

    // Odd indexed pairs
    for (let i = 1; i < arr.length - 1; i += 2) {
      arr[i].isComparing = true;
      arr[i + 1].isComparing = true;
      yield _.cloneDeep(arr);

      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }

      arr[i].isComparing = false;
      arr[i + 1].isComparing = false;
    }

    // Even indexed pairs
    for (let i = 0; i < arr.length - 1; i += 2) {
      arr[i].isComparing = true;
      arr[i + 1].isComparing = true;
      yield _.cloneDeep(arr);

      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }

      arr[i].isComparing = false;
      arr[i + 1].isComparing = false;
    }
  }

  for (const item of arr) {
    item.isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default oddEvenSort;
