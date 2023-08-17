import _ from 'lodash';

function* cocktailShakerSort(arr) {
  let swapped = true;
  let start = 0;
  let end = arr.length;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end - 1; i++) {
      arr[i].isComparing = true;
      arr[i + 1].isComparing = true;
      yield _.cloneDeep(arr);
      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        yield _.cloneDeep(arr);
      }
      arr[i].isComparing = false;
      arr[i + 1].isComparing = false;
    }

    if (!swapped) {
      break;
    }
    swapped = false;

    arr[end-1].isSorted = true;
    end--;
    for (let i = end - 1; i >= start; i--) {
      arr[i].isComparing = true;
      arr[i + 1].isComparing = true;
      yield _.cloneDeep(arr);
      if (arr[i].value > arr[i + 1].value) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        yield _.cloneDeep(arr);
      }
      arr[i].isComparing = false;
      arr[i + 1].isComparing = false;
    }

    arr[start].isSorted = true;
    start++;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default cocktailShakerSort;
