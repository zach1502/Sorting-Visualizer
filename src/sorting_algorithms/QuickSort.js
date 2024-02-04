import _ from "lodash";

function* quickSort(arr, left = 0, right = arr.length - 1) {
  if (left === 0 && right === arr.length - 1) {
    yield { array: _.cloneDeep(arr), message: null };
    yield { array: _.cloneDeep(arr), message: `Starting quick sort` };
  }

  if (left >= right) {
    arr[left].isSorted = true;
    yield { array: _.cloneDeep(arr), message: `${arr[left].value} is in the right spot` };
    return;
  }

  yield { array: _.cloneDeep(arr), message: `Start partitioning` };
  let index = yield* partition(arr, left, right);

  yield { array: _.cloneDeep(arr), message: `Run Quick Sort on Indicies ${left} and ${index-1}` };
  yield* quickSort(arr, left, index - 1);
  yield { array: _.cloneDeep(arr), message: `Run Quick Sort on Indicies ${index + 1} and ${right}` };
  yield* quickSort(arr, index + 1, right);

  if (left === 0 && right === arr.length - 1) {
    yield { array: _.cloneDeep(arr), message: `Quick sort completed!` };
  }
}

function* partition(arr, left, right) {
  let pivot = arr[right].value;
  arr[right].isPartition = true;
  yield { array: _.cloneDeep(arr), message: `Choosing ${pivot} as pivot` };

  let i = left;
  for (let j = left; j < right; j++) {
    arr[j].isComparing = true;
    yield { array: _.cloneDeep(arr), message: `Comparing ${arr[j].value} and ${pivot}` };
    
    if (arr[j].value <= pivot) {
      yield { array: _.cloneDeep(arr), message: `Swapping ${arr[i].value} and ${arr[j].value} as ${arr[j].value} is less than or equal to ${pivot}` };
      arr[j].isComparing = false;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }

    arr[j].isComparing = false;
  }

  yield { array: _.cloneDeep(arr), message: `Swapping pivot ${pivot} into its sorted position` };
  [arr[i], arr[right]] = [arr[right], arr[i]];
  arr[right].isPartition = false;
  arr[i].isSorted = true;

  return i;
}

export default quickSort;
