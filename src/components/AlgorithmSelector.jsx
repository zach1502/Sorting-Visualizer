import React from 'react';
import bubbleSort from '../algorithms/BubbleSort';
import quickSort from '../algorithms/QuickSort';

import { Select, MenuItem } from '@mui/material';

const algorithms = [
  {
    name: 'Bubble Sort',
    function: bubbleSort
  },
  {
    name: 'Quick Sort',
    function: quickSort
  },
];

const AlgorithmSelector = (props) => {
  const setAlgorithm = props.setAlgorithm;
  const algorithm = props.algorithm;
  return (
    <Select
      onChange={(e) => setAlgorithm(algorithms.find(algo => algo.name === e.target.value))}
      value={algorithm.name}
    >
      {algorithms.map((algo, index) => (
        <MenuItem key={index} value={algo.name}>{algo.name}</MenuItem>
      ))}
    </Select>
  );
};

export default AlgorithmSelector;