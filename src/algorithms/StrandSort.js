import _ from 'lodash';

function* strandSort(unsortedArray) {
  yield _.cloneDeep(unsortedArray);
  let mainOutput = [];
  let temporaryOutput = [];

  while (unsortedArray.length > 0) {
    let currentSublist = [];
    currentSublist.push(unsortedArray[0]);
    unsortedArray.shift();

    let iteratorIndex = 0;
    while (iteratorIndex < unsortedArray.length) {
      const currentItem = unsortedArray[iteratorIndex];
      const lastSublistItem = currentSublist[currentSublist.length - 1];

      currentItem.isComparing = true;
      lastSublistItem.isComparing = true;

      yield _.cloneDeep([...currentSublist, ...unsortedArray, ...temporaryOutput, ...mainOutput]);

      if (currentItem.value > lastSublistItem.value) {
        currentSublist.push(currentItem);
        unsortedArray.splice(iteratorIndex, 1);
      } else {
        iteratorIndex++;
      }

      currentItem.isComparing = false;
      lastSublistItem.isComparing = false;
    }

    // Merge the current sublist into the main output
    while (currentSublist.length > 0 && mainOutput.length > 0) {
      const firstSublistItem = currentSublist[0];
      const firstMainOutputItem = mainOutput[0];

      firstSublistItem.isComparing = true;
      firstMainOutputItem.isComparing = true;

      yield _.cloneDeep([...currentSublist, ...unsortedArray, ...temporaryOutput, ...mainOutput]);

      if (firstSublistItem.value >= firstMainOutputItem.value) {
        firstMainOutputItem.isSorted = true;
        temporaryOutput.push(mainOutput.shift());
      } else {
        firstSublistItem.isSorted = true;
        temporaryOutput.push(currentSublist.shift());
      }

      firstSublistItem.isComparing = false;
      firstMainOutputItem.isComparing = false;
    }

    if (currentSublist.length === 0) {
      temporaryOutput = [...temporaryOutput, ...mainOutput].map(item => {
        item.isSorted = true;
        return item;
      });
    }
    if (mainOutput.length === 0) {
      temporaryOutput = [...temporaryOutput, ...currentSublist].map(item => {
        item.isSorted = true;
        return item;
      });
    }
    mainOutput = [...temporaryOutput];
    temporaryOutput = [];
  }

  yield _.cloneDeep(mainOutput);
}

export default strandSort;
