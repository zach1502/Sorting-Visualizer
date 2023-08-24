import _ from 'lodash';

// Illusion
function* sleepSort(arr) {
  yield _.cloneDeep(arr);
  const result = arr.toSorted((a, b) => a.value - b.value);

  for(let i = 0; i < arr.length * 8; i++) {
    const trueIndex = Math.floor(i/8);
    arr[trueIndex] = _.cloneDeep(result[trueIndex]);
    arr[trueIndex].isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default sleepSort;
