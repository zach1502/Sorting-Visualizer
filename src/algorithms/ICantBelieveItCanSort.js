import _ from 'lodash';

function* iCantBelieveItCanSort(arr) {
  yield _.cloneDeep(arr);
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      arr[i].isComparing = true;
      arr[j].isComparing = true;
      if (arr[i].value < arr[j].value) {
        yield _.cloneDeep(arr);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      arr[i].isComparing = false;
      arr[j].isComparing = false;
    }
  }
  yield _.cloneDeep(arr);

  for(let i = 0; i < arr.length; i++) {
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);
  }
}

export default iCantBelieveItCanSort;