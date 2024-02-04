import _ from 'lodash';

function getMax(arr) {
  let max = arr[0].value;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].value > max) {
      max = arr[i].value;
    }
  }
  return max;
}

function* countingSortForRadix(arr, exp, isLastIteration = false) {
  let output = new Array(arr.length).fill(null);
  let count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    arr[i].isComparing = true;
    yield _.cloneDeep(arr);

    count[Math.floor(arr[i].value / exp) % 10]++;

    arr[i].isComparing = false;
    yield _.cloneDeep(arr);
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i].value / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i].value / exp) % 10]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];

    if (isLastIteration) {
      arr[i].isSorted = true;
      yield _.cloneDeep(arr);
    }
    else {
      arr[i].isComparing = true;
      yield _.cloneDeep(arr);
      arr[i].isComparing = false;
    }
  }
}

function* radixSort(arr) {
  yield _.cloneDeep(arr);
  let m = getMax(arr);
  let maxExp = Math.floor(Math.log10(m)) + 1;

  for (let exp = 1, iteration = 1; Math.floor(m / exp) > 0; exp *= 10, iteration++) {
    const isLastIteration = iteration === maxExp;
    yield* countingSortForRadix(arr, exp, isLastIteration);
  }

  yield _.cloneDeep(arr);
}

export default radixSort;
