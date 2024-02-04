import _ from 'lodash';

// An empty array is sorted by definition
function* deleteSort(arr) {
  yield _.cloneDeep(arr);
  while(arr.length) {
    yield _.cloneDeep(arr);
    arr.shift();
  }
  yield _.cloneDeep(arr);
}

export default deleteSort;
