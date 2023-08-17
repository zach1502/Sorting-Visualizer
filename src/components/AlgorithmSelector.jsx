import React from 'react';
import bubbleSort from '../algorithms/BubbleSort';
import quickSort from '../algorithms/QuickSort';
import insertionSort from '../algorithms/InsertionSort';
import selectionSort from '../algorithms/SelectionSort';
import cocktailShakerSort from '../algorithms/CocktailShakerSort';
import mergeSort from '../algorithms/MergeSort';
import radixSort from '../algorithms/RadixSort';

import { Select, MenuItem } from '@mui/material';

const algorithms = [
  {
    name: 'Bubble Sort',
    function: bubbleSort,
  },
  {
    name: 'Quick Sort',
    function: quickSort,
  },
  {
    name: 'Merge Sort',
    function: mergeSort,
  },
  {
    name: 'Insertion Sort',
    function: insertionSort,
  },
  {
    name: 'Selection Sort',
    function: selectionSort,
  },
  {
    name: 'Cocktail Shaker Sort',
    function: cocktailShakerSort,
  },
  {
    name: 'Radix Sort',
    function: radixSort,
  }
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