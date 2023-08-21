import _ from 'lodash';

function* cycleSort(arr) {
  yield _.cloneDeep(arr);
  let writes = 0;

  for (let cycle_start = 0; cycle_start < arr.length - 1; cycle_start++) {
    let item = arr[cycle_start];

    // Highlight the item we're working with.
    item.isComparing = true;
    yield _.cloneDeep(arr);
    item.isComparing = false;

    let pos = cycle_start;
    for (let i = cycle_start + 1; i < arr.length; i++) {
      if (arr[i].value < item.value) {
        pos += 1;
      }
    }

    if (pos === cycle_start) {
      item.isSorted = true;
      yield _.cloneDeep(arr);
      continue;
    }

    while (item.value === arr[pos].value) {
      pos += 1;
    }

    // Swap item with arr[pos]
    [arr[pos], item] = [item, arr[pos]];
    arr[pos].isComparing = true; // Highlight swap
    writes++;

    yield _.cloneDeep(arr);
    arr[pos].isComparing = false;

    while (pos !== cycle_start) {
      pos = cycle_start;
      for (let i = cycle_start + 1; i < arr.length; i++) {
        if (arr[i].value < item.value) {
          pos += 1;
        }
      }

      while (item.value === arr[pos].value) {
        pos += 1;
      }

      // Swap item with arr[pos]
      [arr[pos], item] = [item, arr[pos]];
      arr[pos].isComparing = true; // Highlight swap
      writes++;

      yield _.cloneDeep(arr);
      arr[pos].isComparing = false;
    }

    arr[cycle_start].isSorted = true;
    yield _.cloneDeep(arr);
  }

  // Mark all items as sorted
  arr[arr.length - 1].isSorted = true;
  yield _.cloneDeep(arr);

}

export default cycleSort;
