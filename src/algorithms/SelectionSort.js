import _ from 'lodash';

function* selectionSort(arr) {
  yield { array: _.cloneDeep(arr), message: 'Starting Selection sort' };

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    arr[minIndex].isComparing = true;

    yield { array: _.cloneDeep(arr), message: `Starting search for smallest value from index ${i}` };

    for (let j = i + 1; j < arr.length; j++) {
      arr[j].isComparing = true;
      arr[minIndex].isComparing = true;
      yield { array: _.cloneDeep(arr), message: `Comparing ${arr[j].value} with current smallest value ${arr[minIndex].value}` };

      if (arr[j].value < arr[minIndex].value) {
        arr[minIndex].isComparing = false;
        minIndex = j;
        arr[minIndex].isComparing = true;

        yield { array: _.cloneDeep(arr), message: `Found a smaller value at index ${j}. Setting new smallest value to ${arr[minIndex].value}` };
      } else {
        yield { array: _.cloneDeep(arr), message: `${arr[j].value} is not smaller than ${arr[minIndex].value}` };
      }

      arr[j].isComparing = false;
    }

    if (minIndex !== i) {
      yield { array: _.cloneDeep(arr), message: `Swapping ${arr[i].value} with ${arr[minIndex].value}` };

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      yield { array: _.cloneDeep(arr), message: `Swapped! Now, ${arr[i].value} is at the correct position` };
    } else {
      yield { array: _.cloneDeep(arr), message: `${arr[i].value} is already at the correct position` };
    }

    arr[minIndex].isComparing = false;
    arr[i].isComparing = false;
    arr[i].isSorted = true;
    yield { array: _.cloneDeep(arr), message: `Finished sorting index ${i}` };
  }

  arr[arr.length - 1].isSorted = true;
  yield { array: _.cloneDeep(arr), message: 'Selection sort completed' };
}

export default selectionSort;
