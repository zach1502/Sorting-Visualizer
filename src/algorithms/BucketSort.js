import _ from 'lodash';

let bucketOrder;

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const combineBuckets = (buckets) => {
  const arr = [];
  
  if (!bucketOrder) {
    bucketOrder = shuffle([...Array(buckets.length).keys()]);
  }
  
  for (const index of bucketOrder) {
    for (const item of buckets[index]) {
      arr.push(item);
    }
  }

  return arr;
}

function* insertionSort(bucket, buckets) {
  for (let i = 1; i < bucket.length; i++) {
    const key = bucket[i];
    key.isComparing = true;
    let j = i - 1;

    yield _.cloneDeep(combineBuckets(buckets));

    while (j >= 0 && bucket[j].value > key.value) {
      bucket[j + 1] = bucket[j];

      if (j - 1 >= 0) bucket[j - 1].isComparing = true;
      yield _.cloneDeep(combineBuckets(buckets));
      if (j - 1 >= 0) bucket[j - 1].isComparing = false;

      j = j - 1;
    }

    bucket[j + 1] = key;
    key.isComparing = false;
  }
  for (const item of bucket) {
    item.isSorted = true;
  }
}

function* bucketSort(arr) {
  const numberOfBuckets = Math.floor(Math.sqrt(arr.length));
  const buckets = Array.from({ length: numberOfBuckets }, () => []);

  const maxVal = Math.max(...arr.map(item => item.value));

  for (const item of arr) {
    const bucketIndex = Math.floor((numberOfBuckets * item.value) / (maxVal + 1));
    item.isComparing = true;
    yield _.cloneDeep(arr);
    item.isComparing = false;
    buckets[bucketIndex].push(_.cloneDeep(item));
  }

  for (const bucket of buckets) {
    if (bucket.length > 1) {
      yield* insertionSort(bucket, buckets);
    }
  }

  let index = 0;
  for (const bucket of buckets) {
    for (const item of bucket) {
      arr[index++] = item;
      yield _.cloneDeep(arr);
    }
  }

  yield _.cloneDeep(arr);
}

export default bucketSort;
