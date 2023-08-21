import _ from 'lodash'

function* combSort(arr) {
  yield _.cloneDeep(arr);
  let gap = arr.length;
  const shrink = 1.3;
  let sorted = false;

  while (!sorted) {
    gap = Math.floor(gap / shrink);

    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }

    for (let i = 0; i + gap < arr.length; i++) {
      arr[i].isComparing = true;
      arr[i + gap].isComparing = true;
      yield _.cloneDeep(arr);

      if (arr[i].value > arr[i + gap].value) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        sorted = false;
      }

      arr[i].isComparing = false;
      arr[i + gap].isComparing = false;
    }
  }

  for (const item of arr) {
    item.isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default combSort;