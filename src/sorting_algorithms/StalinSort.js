import _ from 'lodash';

function* stalinSort(arr) {
  yield _.cloneDeep(arr);
  let index = 0;
  while (index < arr.length - 1) {
    arr[index].isComparing = true;
    arr[index + 1].isComparing = true;
    yield _.cloneDeep(arr); // Show the current comparison

    if (arr[index].value > arr[index + 1].value) {
      arr.splice(index + 1, 1); // Remove the element if it's out of order
    } else {
      arr[index].isSorted = true;
      index++;
    }

    // Clear the comparing flags for visualization
    arr.forEach(elem => elem.isComparing = false);
  }

  if (arr.length > 0) {
    arr[arr.length - 1].isSorted = true; // Mark the last element as sorted
    yield _.cloneDeep(arr);
  }

  return arr;
}

export default stalinSort;
