import _ from 'lodash';

const removeGapsFromArray = (arr) => {
  const gaplessArr = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i].value != null){
      gaplessArr.push(arr[i]);
    }
  }

  return gaplessArr;
}

function* pigeonholeSort(arr){
  const sortedArray = new Array(arr.length);
  sortedArray.fill({
    value: null,
    isSorted: false,
    isComparing: false,
    isPartition: false,
  });


  while(arr.length){
    const value = arr[0].value;
    sortedArray[value-1] = _.cloneDeep(arr[0]);
    sortedArray[value-1].isSorted = true;
    arr.shift();

    console.log(removeGapsFromArray(sortedArray))

    yield _.cloneDeep([...arr, ...removeGapsFromArray(sortedArray)]);
  }

  yield _.cloneDeep(sortedArray);
}

export default pigeonholeSort;