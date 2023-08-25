import _ from 'lodash';

class Node {
  constructor(item) {
    this.key = item;
    this.left = this.right = null;
  }
}

// Let's define the TreeSort as a generator function
function* treeSort(arr) {
  function* insertRec(root, item, tempArr, i) {
    item.isComparing = true;
    yield [..._.cloneDeep(tempArr), ..._.cloneDeep(arr.slice(i, arr.length))];

    if (root == null) {
      root = new Node(item);
      item.isComparing = false;
      yield [..._.cloneDeep(tempArr), ..._.cloneDeep(arr.slice(i, arr.length))];
      return root;
    }

    if (item.value < root.key.value) {
      item.isComparing = false;
      root.left = yield* insertRec(root.left, item, tempArr, i);
    } else if (item.value > root.key.value) {
      item.isComparing = false;
      root.right = yield* insertRec(root.right, item, tempArr, i);
    } else {
      item.isComparing = false;
    }
    return root;
  }

  let root = null;
  function treeToArray(root, sortedArr) {
    if (root != null) {
      treeToArray(root.left, sortedArr);
      sortedArr.push(root.key);
      treeToArray(root.right, sortedArr);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const tempArr = [];
    treeToArray(root, tempArr);
    for(const item of tempArr) {
      item.isSorted = true;
    }
    root = yield* insertRec(root, item, tempArr, i);
  }
  const sortedArr = [];
  treeToArray(root, sortedArr);
  for(const item of sortedArr) {
    item.isSorted = true;
  }
  yield _.cloneDeep(sortedArr);
}

export default treeSort;