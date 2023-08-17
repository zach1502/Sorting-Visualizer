import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import ArrayDisplay from '../components/ArrayDisplay';
import AlgorithmSelector from '../components/AlgorithmSelector'

import bubbleSort from '../algorithms/BubbleSort';

import _ from 'lodash';

function SortingVisualizer() {

  const [numElements, setNumElements] = useState(100); // [TODO] Add slider to change this
  const [arr, setArr] = useState(generateRandomArray(numElements));
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [algorithm, setAlgorithm] = useState({function: bubbleSort, name: "Bubble Sort"});

  function generateRandomArray(length) {
    const numbers = Array.from({ length }, (_, i) => i + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers.map(num => ({
      value: num,
      isSorted: false,
      isComparing: false,
      isPartition: false,
    }));
  }

  const startSorting = () => {
    const deepCopyArr = _.cloneDeep(arr);
    const newSteps = [...(algorithm.function)(deepCopyArr)];
    setSteps(newSteps);

    if (intervalId) { // Clear any existing intervals
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      setCurrentStep(prevStep => {
        if (prevStep < newSteps.length - 1) {
          return prevStep + 1;
        } else {
          clearInterval(newIntervalId);
          setIntervalId(null);
          return prevStep;
        }
      });
    }, 50);

    setIntervalId(newIntervalId);
  }

  const pauseSorting = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  const stepReset = () => {
    setCurrentStep(0);
  }

  const stepForward = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }

  const stepBackward = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  const displayArr = steps[currentStep] || arr;

  const onAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
    pauseSorting();
    setCurrentStep(0);
  }

  return (
    <Box mt={3} mx="auto" width="90%">
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        {/* Control buttons */}
        <Grid item>
          <ButtonGroup
            variant="contained"
            aria-label="Control button group"
          >
            <Button onClick={startSorting}>Start</Button>
            <Button onClick={pauseSorting}>Pause</Button>
          </ButtonGroup>
        </Grid>
  
        {/* Step buttons */}
        <Grid item>
          <ButtonGroup
            variant="contained"
            aria-label="Step button group"
          >
            <Button onClick={stepReset}>Reset</Button>
            <Button onClick={stepBackward}>Step Backwards</Button>
            <Button onClick={stepForward}>Step Forward</Button>
          </ButtonGroup>
        </Grid>

        <Grid item>
          <AlgorithmSelector 
            setAlgorithm={setAlgorithm} 
            algorithm={algorithm} 
            onChange={onAlgorithmChange}
          />
        </Grid>
      </Grid>
  
      {/* Display area */}
      <Box mt={4} p={2} border={1} 
        borderColor="grey.500" 
        borderRadius="borderRadius"
        height="50vh"
      >
        <ArrayDisplay arr={displayArr} numElements={numElements} />
      </Box>
    </Box>
  );
}

export default SortingVisualizer;
