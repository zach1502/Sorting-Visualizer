import _ from 'lodash';

function removePadding(arr) {
  const trueArr = [];
  for (const item of arr) {
    if (item && isFinite(item.value)) {
      trueArr.push(item);
    }
  }
  return trueArr;
}

function* bitonicSort(arr) {
  // Find the next power of two
  let n = arr.length;
  let nextPowOfTwo = Math.pow(2, Math.ceil(Math.log2(n)));
  let padding = Array(nextPowOfTwo - n).fill({
    value: Infinity,
    isSorted: false,
    isComparing: false,
    isPartition: false,
  });
  arr = arr.concat(padding);

  for (let k = 2; k <= nextPowOfTwo; k = k << 1) {
    for (let j = k >> 1; j > 0; j = j >> 1) {
      for (let i = 0; i < nextPowOfTwo; i++) {
        let l = i ^ j;
        if (l > i) {
          arr[i].isComparing = true;
          arr[l].isComparing = true;

          yield _.cloneDeep(removePadding(arr));
          if (((i & k) === 0 && arr[i].value > arr[l].value) ||
            ((i & k) !== 0 && arr[i].value < arr[l].value)) {
            [arr[i], arr[l]] = [arr[l], arr[i]];
          }
          arr[i].isComparing = false;
          arr[l].isComparing = false;
        }
      }
    }
  }
  // Remove padding
  arr = arr.slice(0, n);
  for (let i = 0; i < arr.length; i++) {
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default bitonicSort;

