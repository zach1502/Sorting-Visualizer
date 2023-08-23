import _ from 'lodash';


const combineBuckets = (buckets) => {
  const arr = [];

  for (const bucket of buckets) {
    for (const item of bucket) {
      arr.push(item);
    }
  }

  return arr;
}

function* spreadSort(arr) {
  if (arr.length === 50) {
    yield _.cloneDeep(arr);
  }

  let maxVal = Math.max(...arr.map(item => item.value));
  const binRange = 4;
  const buckets = [];
  for (let i = 0; i <= binRange; i++) {
    buckets.push([]);
  }

  for (const item of arr) {
    const binIndex = Math.floor((item.value * binRange) / maxVal);
    buckets[binIndex].push(item);
    yield _.cloneDeep(combineBuckets(buckets));
  }

  const threshold = 16;
  let index = 0;

  console.log(buckets)
  for (const bucket of buckets) {
    if (bucket.length <= threshold) {
      yield* insertionSort(bucket, buckets);
    } else {
      yield* spreadSort(bucket);
    }

    for (const item of bucket) {
      arr[index++] = item;
      yield _.cloneDeep(combineBuckets(buckets));
    }
  }
}

function* insertionSort(arr, buckets) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    if (j >= 0) arr[j].isComparing = true;
    yield _.cloneDeep(combineBuckets(buckets));
    if (j >= 0) arr[j].isComparing = false;

    while (j >= 0 && arr[j].value > key.value) {
      arr[j + 1] = arr[j];

      if (j - 1 >= 0) arr[j - 1].isComparing = true;
      yield _.cloneDeep(combineBuckets(buckets));
      if (j - 1 >= 0) arr[j - 1].isComparing = false;

      j = j - 1;
    }
    arr[j + 1] = key;

    yield _.cloneDeep(combineBuckets(buckets));
  }

  for (let k = 0; k < arr.length; k++) {
    arr[k].isSorted = true;
    yield _.cloneDeep(combineBuckets(buckets));
  }
}

export default spreadSort;
