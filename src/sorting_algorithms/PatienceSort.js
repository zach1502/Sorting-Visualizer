import _ from 'lodash';

/* WIP: Needs improvement to visualization */

function* patienceSort(arr) {
  yield _.cloneDeep(arr);
  let piles = [];
  let tops = [];

  for (let i = 0; i < arr.length; i++) {
    const key1 = arr[i];
    key1.isComparing = true;
    let placed = false;

    for (let j = 0; j < piles.length; j++) {
      const key2 = tops[j];
      key2.isComparing = true;
      yield _.cloneDeep(arr);

      if (piles[j][piles[j].length - 1].value >= arr[i].value) {
        piles[j].push(arr[i]);
        tops[j] = arr[i];
        placed = true;

        key1.isComparing = false;
        yield _.cloneDeep(arr);
        break;
      }

      key2.isComparing = false;
    }

    if (!placed) {
      piles.push([arr[i]]);
      tops.push(arr[i]);
    }

    key1.isComparing = false;
    yield _.cloneDeep(arr);
  }

  for (let i = 0; i < arr.length; i++) {
    let minIndex = 0;
    
    for (let j = 1; j < tops.length; j++) {
      tops[j].isComparing = true;
      tops[minIndex].isComparing = true;
      yield _.cloneDeep(arr);
      tops[j].isComparing = false;
      tops[minIndex].isComparing = false;

      if (tops[j].value < tops[minIndex].value) {
        minIndex = j;
      }
    }

    arr[i] = _.cloneDeep(tops[minIndex]);
    arr[i].isSorted = true;
    yield _.cloneDeep(arr);

    piles[minIndex].pop();

    if (piles[minIndex].length > 0) {
      tops[minIndex] = piles[minIndex][piles[minIndex].length - 1];
    } else {
      piles.splice(minIndex, 1);
      tops.splice(minIndex, 1);
    }
  }

  yield _.cloneDeep(arr);
}

export default patienceSort;
