import React from 'react';
import { Box } from '@mui/material';

const ArrayBar = (props) => {
  const value = props.value;
  const color = props.color || 'black';

  const style = {
    backgroundColor: color,
    height: `${value}px`,
    width: '1vw',
    margin: '0 2px',
    display: 'inline-block'
  };
  return <Box sx={style}></Box>;
}

export default React.memo(ArrayBar);
