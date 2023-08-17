import _ from 'lodash';

function* shellSort(arr) {
  let n = arr.length;
  
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      temp.isComparing = true;
      yield _.cloneDeep(arr);
      
      let j;
      for (j = i; j >= gap && arr[j - gap].value > temp.value; j -= gap) {
        arr[j - gap].isComparing = true;
        yield _.cloneDeep(arr);
        arr[j] = arr[j - gap];
        arr[j - gap].isComparing = false;
      }
      
      arr[j] = temp;
      temp.isComparing = false;
      yield _.cloneDeep(arr);
    }
  }
  
  for (let item of arr) {
    item.isSorted = true;
  }
  yield _.cloneDeep(arr);
}

export default shellSort;
