import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import ArrayDisplay from '../components/ArrayDisplay';

import bubbleSort from '../algorithms/BubbleSort';
import quickSort from '../algorithms/QuickSort';

import _ from 'lodash';

function SortingVisualizer() {
  const [arr, setArr] = useState(generateRandomArray(50));
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

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
    const newSteps = [...quickSort(deepCopyArr)];
    setSteps(newSteps);
    setCurrentStep(0);

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
    }, 100);

    setIntervalId(newIntervalId);
  }

  const stopSorting = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  const stepForward = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }

  const stepBackward = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  const displayArr = steps[currentStep] || arr;

  console.debug(displayArr);

  return (
    <Box>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={startSorting}>Start</Button>
        <Button onClick={stopSorting}>Stop</Button>
        <Button onClick={stepForward}>Next</Button>
        <Button onClick={stepBackward}>Back</Button>
      </ButtonGroup>

      <Box>
        <ArrayDisplay arr={displayArr} />
      </Box>
    </Box>
  );
}

export default SortingVisualizer;
