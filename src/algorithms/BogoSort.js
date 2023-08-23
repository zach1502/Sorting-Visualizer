import _ from 'lodash';

function* bogoSort(arr) {
  function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1].value > array[i].value) return false;
    }
    return true;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const maxTries = 500;
  let tries = 0;

  while (maxTries !== tries && !isSorted(arr)) {
    console.log(tries);
    yield _.cloneDeep(shuffle(arr));
    tries++;
  }

  arr.sort((a, b) => {return a.value - b.value});

  // Mark all elements as sorted
  for (let item of arr) {
    item.isSorted = true;
  }
  yield _.cloneDeep(arr);

  return arr;
}

export default bogoSort;
