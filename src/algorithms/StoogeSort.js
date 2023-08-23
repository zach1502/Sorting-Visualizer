import _ from 'lodash';

function* stoogeSortRecurse(arr, l = 0, h = arr.length - 1) {
  if (l >= h) return;

  if (arr[l].value > arr[h].value) {
    arr[l].isComparing = true;
    arr[h].isComparing = true;

    yield _.cloneDeep(arr);
    [arr[l], arr[h]] = [arr[h], arr[l]];

    arr[l].isComparing = false;
    arr[h].isComparing = false;
  }

  if (h - l + 1 > 2) {
    const t = Math.floor((h - l + 1) / 3);
    yield* stoogeSortRecurse(arr, l, h - t);
    yield* stoogeSortRecurse(arr, l + t, h);
    yield* stoogeSortRecurse(arr, l, h - t);
  }

  return arr;
}


function* stoogeSort (arr) {
  yield* stoogeSortRecurse(arr);

  for (let i = 0; i < arr.length; i++){
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
  }
}
export default stoogeSort;
