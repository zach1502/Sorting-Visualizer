import _ from 'lodash';

function* insertionSort(arr) {
  yield { array: _.cloneDeep(arr), message: 'Starting insertion sort' };
  
  arr[0].isSorted = true;
  for (let i = 1; i < arr.length; i++) {
    arr[i].isComparing = true;
    
    yield { array: _.cloneDeep(arr), message: `Inserting ${arr[i].value} into the sorted portion of the array` };
    
    let j = i;
    yield { array: _.cloneDeep(arr), message: `Checking if ${arr[j].value} < ${arr[j - 1].value}` };
    while (j > 0 && arr[j - 1].value > arr[j].value) {
      arr[j].isComparing = true;
      arr[j - 1].isComparing = true;
      
      // Swap the elements
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      
      yield { array: _.cloneDeep(arr), message: `Swapped ${arr[j].value} with ${arr[j - 1].value}` };
      
      arr[j - 1].isComparing = false;
      arr[j].isComparing = false;
      
      yield { array: _.cloneDeep(arr), message: `Checking if ${arr[j].value} < ${arr[j - 1].value}` };
      j--;
    }

    arr[i].isComparing = false;
    arr[j].isSorted = true;
    yield { array: _.cloneDeep(arr), message: `${arr[j].value} is now in the correct position` };
  }

  for (let k = 0; k < arr.length; k++) {
    arr[k].isSorted = true;
  }
  yield { array: _.cloneDeep(arr), message: 'Insertion sort completed!' };
}

export default insertionSort;
