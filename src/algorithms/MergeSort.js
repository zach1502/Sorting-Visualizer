import _ from 'lodash';

function* mergeSort(array, leftIndex = 0, rightIndex = array.length - 1) {
  if (leftIndex === 0 && rightIndex === array.length - 1) {
    yield { array: _.cloneDeep(array), message: null };
    yield { array: _.cloneDeep(array), message: 'Starting merge sort' };
  }

  if (leftIndex < rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    yield { array: _.cloneDeep(array), message: `Running merge sort on the left partition (indicies ${leftIndex} to ${middleIndex})` };
    yield* mergeSort(array, leftIndex, middleIndex);
    yield { array: _.cloneDeep(array), message: `Running merge sort on the left partition (indicies ${middleIndex+1} to ${rightIndex})` };
    yield* mergeSort(array, middleIndex + 1, rightIndex);
    yield { array: _.cloneDeep(array), message: `Merging Time!` };
    yield* merge(array, leftIndex, middleIndex, rightIndex);
  }

  if (leftIndex === 0 && rightIndex === array.length - 1) {
    array.forEach(el => el.isSorted = true);
    yield { array: _.cloneDeep(array), message: 'Merge sort completed!' };
  }
}

function* merge(array, leftIndex, middleIndex, rightIndex) {
  const leftSize = middleIndex - leftIndex + 1;
  const rightSize = rightIndex - middleIndex;

  let leftSubArray = new Array(leftSize);
  let rightSubArray = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftSubArray[i] = array[leftIndex + i];
  }
  for (let j = 0; j < rightSize; j++) {
    rightSubArray[j] = array[middleIndex + 1 + j];
  }

  yield { array: _.cloneDeep(array), message: `Merging sub-arrays from index ${leftIndex} to ${rightIndex}` };

  let leftPointer = 0, rightPointer = 0, mergePointer = leftIndex;
  while (leftPointer < leftSize && rightPointer < rightSize) {

    leftSubArray[leftPointer].isComparing = true;
    rightSubArray[rightPointer].isComparing = true;
    yield { array: _.cloneDeep(array), message: `Comparing ${leftSubArray[leftPointer].value} and ${rightSubArray[rightPointer].value}.\nRemaining left array values:   [${showArrayContents(leftSubArray, leftPointer)}].\nRemaining right array values: [${showArrayContents(rightSubArray, rightPointer)}]` };
    rightSubArray[rightPointer].isComparing = false;

    if (leftSubArray[leftPointer].value <= rightSubArray[rightPointer].value) {
      array[mergePointer] = _.cloneDeep(leftSubArray[leftPointer]);
      array[mergePointer].isComparing = false;
      yield { array: _.cloneDeep(array), message: `Placing ${leftSubArray[leftPointer].value} into the merged array` };
      leftPointer++;
      rightSubArray[rightPointer].isComparing = false;
    } else {
      array[mergePointer] = _.cloneDeep(rightSubArray[rightPointer]);
      array[mergePointer].isComparing = false;
      yield { array: _.cloneDeep(array), message: `Placing ${rightSubArray[rightPointer].value} into the merged array` };
      rightPointer++;
      leftSubArray[leftPointer].isComparing = false;
    }

    array[mergePointer].isComparing = false;
    array[mergePointer].isSorted = true;
    mergePointer++;

    if (leftIndex === 0 && rightIndex === array.length - 1) {
      array[mergePointer].isSorted = true;
    }
  }

  while (leftPointer < leftSize) {
    array[mergePointer] = leftSubArray[leftPointer];
    yield { array: _.cloneDeep(array), message: `Remaining elements from the left sub-array are placed into the merged array ${showArrayContents(leftSubArray, leftPointer)}` };
    leftPointer++;
    mergePointer++;
  }

  while (rightPointer < rightSize) {
    array[mergePointer] = rightSubArray[rightPointer];
    yield { array: _.cloneDeep(array), message: `Remaining elements from the right sub-array are placed into the merged array ${showArrayContents(rightSubArray, rightPointer)}` };
    rightPointer++;
    mergePointer++;
  }
}

function showArrayContents(arr, i) {
  return arr.filter((_, index) => index >= i).map(el => el.value)
}

export default mergeSort;
