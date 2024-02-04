import _ from 'lodash';

function* gnomeSort(arr) {
  yield _.cloneDeep(arr);
  let index = 0;

  while (index < arr.length) {
    if (index === 0 || arr[index].value >= arr[index - 1].value) {
      index++;

      if (index === arr.length) {
        for (let item of arr) {
          item.isSorted = true;
          yield _.cloneDeep(arr);
        }
      }

    } else {
      arr[index].isComparing = true;
      arr[index - 1].isComparing = true;

      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      yield _.cloneDeep(arr);

      arr[index].isComparing = false;
      arr[index - 1].isComparing = false;

      index--;
    }
  }
}

export default gnomeSort;
