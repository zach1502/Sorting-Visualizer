import React from 'react';
import ArrayBar from './ArrayBar';

const ArrayDisplay = (props) => {
  const arr = props.arr;
  const numElements = props.numElements;

  return (
    <>
      {arr.map((item, idx) => {
        let color = "red";
        if (item.isComparing) {
          color = "blue";
        } else if (item.isSorted) {
          color = "green";
        } else if (item.isPartition) {
          color = "orange";
        }
        return <ArrayBar key={idx} value={item.value} color={color} numElements={numElements}/>;
      })}
    </>
  );
}

export default React.memo(ArrayDisplay);