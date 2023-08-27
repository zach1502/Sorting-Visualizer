import React from 'react';
import { Select, MenuItem} from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';

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
import patienceSort from '../algorithms/PatienceSort';
import smoothSort from '../algorithms/SmoothSort';
import strandSort from '../algorithms/StrandSort.js';
import combSort from '../algorithms/CombSort';
import gnomeSort from '../algorithms/GnomeSort';
import oddEvenSort from '../algorithms/OddEvenSort';
import pigeonholeSort from '../algorithms/PigeonholeSort';
import bucketSort from '../algorithms/BucketSort';
import countingSort from '../algorithms/CountingSort';
import spreadSort from '../algorithms/SpreadSort';
import pancakeSort from '../algorithms/PancakeSort';
import iCantBelieveItCanSort from '../algorithms/ICantBelieveItCanSort';
import bitonicSort from '../algorithms/BitonicSort';
import bogoSort from '../algorithms/BogoSort';
import stoogeSort from '../algorithms/StoogeSort';
import slowSort from '../algorithms/SlowSort';
import stalinSort from '../algorithms/StalinSort';
import sleepSort from '../algorithms/SleepSort';
import deleteSort from '../algorithms/DeleteSort';
import treeSort from '../algorithms/TreeSort';

const algorithms = [
  {
    name: 'Bubble Sort',
    function: bubbleSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Quick Sort',
    function: quickSort,
    worseCase: 'n^2',
    averageCase: 'n log(n)',
    bestCase: 'n log(n)',
    memory: 'log(n)',
    stable: false,
    method: 'Partitioning',
    joke: false,
  },
  {
    name: 'Merge Sort',
    function: mergeSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n log(n)',
    memory: 'n',
    stable: false,
    method: 'Merging',
    joke: false,
  },
  {
    name: 'Insertion Sort',
    function: insertionSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Insertion',
    joke: false,
  },
  {
    name: 'Selection Sort',
    function: selectionSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n^2',
    memory: '1',
    stable: false,
    method: 'Selection',
    joke: false,
  },
  {
    name: 'Cocktail Shaker Sort',
    function: cocktailShakerSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Radix Sort',
    function: radixSort,
    worseCase: 'nk/d',
    averageCase: 'nk/d',
    bestCase: 'n',
    memory: 'n+2^d',
    stable: true,
    method: 'Non-comparative',
    joke: false,
  },
  {
    name: 'Intro Sort',
    function: introSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n log(n)',
    memory: 'log(n)',
    stable: false,
    method: 'Hybrid',
    joke: false,
  },
  {
    name: 'Heap Sort',
    function: heapSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n log(n)',
    memory: '1',
    stable: false,
    method: 'Selection',
    joke: false,
  },
  {
    name: 'Block Sort',
    function: blockSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: '',
    joke: false,
  },
  {
    name: 'Shell Sort',
    function: shellSort,
    worseCase: 'n^(4/3)',
    averageCase: 'n^(4/3)',
    bestCase: 'n log(n)',
    memory: '1',
    stable: false,
    method: 'Insertion',
    joke: false,
  },
  {
    name: 'Tim Sort',
    function: timSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n',
    memory: 'n',
    stable: true,
    method: 'Hybrid',
    joke: false,
  },
  {
    name: 'Exchange Sort',
    function: exchangeSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n^2',
    memory: '1',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Cycle Sort',
    function: cycleSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n^2',
    memory: '1',
    stable: false,
    method: 'Selection',
    joke: false,
  },
  {
    name: 'Patience Sort',
    function: patienceSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n',
    memory: '1',
    stable: false,
    method: 'Hybrid',
    joke: false,
  },
  {
    name: 'Smooth Sort',
    function: smoothSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n',
    memory: '1',
    stable: false,
    method: 'Selection',
    joke: false,
  },
  {
    name: 'Strand Sort',
    function: strandSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: 'n',
    stable: true,
    method: '',
    joke: false,
  },
  {
    name: 'Comb Sort',
    function: combSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n log(n)',
    memory: '1',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Gnome Sort',
    function: gnomeSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Odd-Even Sort',
    function: oddEvenSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Pigeonhole Sort',
    function: pigeonholeSort,
    worseCase: 'n+N',
    averageCase: 'n+N',
    bestCase: 'n+N',
    memory: 'N',
    stable: true,
    method: 'Non-comparative',
    joke: false,
  },
  {
    name: 'Bucket Sort',
    function: bucketSort,
    worseCase: 'n+r',
    averageCase: 'n+r',
    bestCase: 'n+r',
    memory: 'n+r',
    stable: true,
    method: 'Non-comparative',
    joke: false,
  },
  {
    name: 'Counting Sort',
    function: countingSort,
    worseCase: 'n+r',
    averageCase: 'n+r',
    bestCase: 'n+r',
    memory: 'n+r',
    stable: true,
    method: 'Non-exchanging',
    joke: false,
  },
  {
    name: 'Spread Sort',
    function: spreadSort,
    worseCase: 'n (k/s + d)',
    averageCase: 'nk/d',
    bestCase: 'n',
    memory: 'k/d 2^d',
    stable: false,
    method: 'Non-exchanging',
    joke: false,
  },
  {
    name: 'Pancake Sort',
    function: pancakeSort,
    worseCase: 'n',
    averageCase: 'n',
    bestCase: '1',
    memory: '1',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'I Can\'t Believe It Can Sort',
    function: iCantBelieveItCanSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n^2',
    memory: '1',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Bitonic Sort',
    function: bitonicSort,
    worseCase: 'log^2(n)',
    averageCase: 'log^2(n)',
    bestCase: 'log^2(n)',
    memory: '1',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Bogo Sort',
    function: bogoSort,
    worseCase: 'infinite',
    averageCase: 'n * n!',
    bestCase: 'n',
    memory: '1',
    stable: false,
    method: 'Random',
    joke: false,
  },
  {
    name: 'Stooge Sort',
    function: stoogeSort,
    worseCase: 'n^2.71',
    averageCase: 'n^2.71',
    bestCase: 'n^2.71',
    memory: 'n',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Slow Sort',
    function: slowSort,
    worseCase: 'n^log(n)',
    averageCase: 'n^log(n)',
    bestCase: 'n^log(n)',
    memory: 'n',
    stable: false,
    method: 'Exchanging',
    joke: false,
  },
  {
    name: 'Stalin Sort',
    function: stalinSort,
    worseCase: 'n',
    averageCase: 'n',
    bestCase: 'n',
    memory: '1',
    stable: false,
    method: 'Deletion',
    joke: true,
  },
  {
    name: 'Sleep Sort',
    function: sleepSort,
    worseCase: 'sleep*max',
    averageCase: 'sleep*max',
    bestCase: 'sleep*max',
    memory: '1',
    stable: false,
    method: 'Sleeping',
    joke: true,
  },
  {
    name: 'Delete Sort',
    function: deleteSort,
    worseCase: 'n',
    averageCase: 'n',
    bestCase: 'n',
    memory: '1',
    stable: false,
    method: 'Deleting',
    joke: true,
  },
  {
    name: 'Tree Sort',
    function: treeSort,
    worseCase: 'n log(n)',
    averageCase: 'n log(n)',
    bestCase: 'n log(n)',
    memory: 'n',
    stable: true,
    method: 'Insertion',
    joke: false,
  }
];

const AlgorithmSelector = (props) => {
  const { setAlgorithm, algorithm, onChange } = props;

  return (
    <Autocomplete
      value={algorithm}
      onChange={(event, newValue) => {
        onChange(event);
        if (newValue) {
          setAlgorithm(newValue);
        }
      }}
      options={algorithms}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Select Algorithm" variant="outlined" sx={{ width: '265px' }} />
      )}
    />
  );
};

export default AlgorithmSelector;