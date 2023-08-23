import React from 'react';
import { Box, Typography } from '@mui/material';

const ArrayBar = (props) => {
  const value = props.value;
  const color = props.color || '#000000';
  const numElements = props.numElements;

  const style = {
    backgroundColor: color,
    height: `${value / numElements * 100}%`,
    width: `calc(${100 / numElements}% - 2px)`,
    margin: '0 1px',
    display: 'inline-block',
    position: 'relative'
  };

  const textStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '-1.2em',
  };

  return (<Box sx={style}>
    <Typography
      align='center'
      sx={textStyle}
    >
      {value}
    </Typography>
  </Box>);
}

export default React.memo(ArrayBar);
