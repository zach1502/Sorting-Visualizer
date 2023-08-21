import React from 'react';
import bubbleSort from '../algorithms/BubbleSort';
import quickSort from '../algorithms/QuickSort';
import insertionSort from '../algorithms/InsertionSort';
import selectionSort from '../algorithms/SelectionSort';
import cocktailShakerSort from '../algorithms/CocktailShakerSort';
import mergeSort from '../algorithms/MergeSort';
import radixSort from '../algorithms/RadixSort';
import introSort from '../algorithms/IntroSort';
import heapSort from '../algorithms/HeapSort';
import blockSort from '../algorithms/BlockSort';
import shellSort from '../algorithms/ShellSort';
import timSort from '../algorithms/TimSort';
import exchangeSort from '../algorithms/ExchangeSort';
import cycleSort from '../algorithms/CycleSort';

import { Select, MenuItem } from '@mui/material';
import patienceSort from '../algorithms/PatienceSort';
import smoothSort from '../algorithms/SmoothSort'
import strandSort from '../algorithms/StrandSort.js'

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
  },
  {
    name: 'Intro Sort',
    function: introSort,
  },
  {
    name: 'Heap Sort',
    function: heapSort,
  },
  {
    name: 'Block Sort',
    function: blockSort,
  },
  {
    name: 'Shell Sort',
    function: shellSort,
  },
  {
    name: 'Tim Sort',
    function: timSort,
  },
  {
    name: 'Exchange Sort',
    function: exchangeSort,
  },
  {
    name: 'Cycle Sort',
    function: cycleSort,
  },
  {
    name: 'Patience Sort',
    function: patienceSort,
  },
  {
    name: 'Smooth Sort',
    function: smoothSort,
  },
  {
    name: 'Strand Sort',
    function: strandSort,
  }
];

const AlgorithmSelector = (props) => {
  const setAlgorithm = props.setAlgorithm;
  const algorithm = props.algorithm;
  const onChange = props.onChange;

  return (
    <Select
      onChange={(e) => {onChange(e); setAlgorithm(algorithms.find(algo => algo.name === e.target.value))}}
      value={algorithm.name}
    >
      {algorithms.map((algo, index) => (
        <MenuItem key={index} value={algo.name}>{algo.name}</MenuItem>
      ))}
    </Select>
  );
};

export default AlgorithmSelector;