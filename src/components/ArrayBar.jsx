import React from 'react';
import { Box } from '@mui/material';

const ArrayBar = (props) => {
  const value = props.value;
  const color = props.color || 'black';
  const numElements = props.numElements;

  const style = {
    backgroundColor: color,
    height: `${value / numElements * 100}%`,
    width: `calc(${100 / numElements}% - 2px)`,
    margin: '0 1px',
    display: 'inline-block'
  };
  return <Box sx={style}></Box>;
}

export default React.memo(ArrayBar);
