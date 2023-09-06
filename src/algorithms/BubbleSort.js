import _ from 'lodash';

function* bubbleSort(arr) {
  yield { array: _.cloneDeep(arr), message: null };
  yield { array: _.cloneDeep(arr), message: 'Starting bubble sort' };
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      arr[j].isComparing = true;
      arr[j + 1].isComparing = true;

      yield { array: _.cloneDeep(arr), message: `Comparing ${arr[j].value} and ${arr[j + 1].value}` };

      if (arr[j].value > arr[j + 1].value) {
        yield { array: _.cloneDeep(arr), message: `${arr[j].value} is greater than ${arr[j + 1].value}, so swapping` };
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        yield { array: _.cloneDeep(arr), message: 'Swapped' };
        swapped = true;
      } else {
        yield { array: _.cloneDeep(arr), message: `${arr[j].value} is not greater than ${arr[j + 1].value}, so not swapping` };
      }

      arr[j].isComparing = false;
      arr[j + 1].isComparing = false;
    }
    arr[n - i - 1].isSorted = true;
    yield { array: _.cloneDeep(arr), message: `${arr[n - i - 1].value} is sorted in the right spot` };

    if (!swapped) {
      yield { array: _.cloneDeep(arr), message: 'Performed no swaps during this pass, so we know it is sorted already!' };
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    arr[i].isSorted = true;
  }
  yield { array: _.cloneDeep(arr), message: 'Bubble sort completed!' };
}

export default bubbleSort;
