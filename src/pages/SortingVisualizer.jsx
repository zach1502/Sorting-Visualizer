import React from 'react';
import { Box, Grid } from '@mui/material';
import AlgorithmSelector from '../components/AlgorithmSelector'
import algorithmDescriptions from '../utils/AlgorithmDescriptions';

import AlgorithmInfo from '../modules/AlgorithmInfo';
import ControlButtons from '../modules/ControlButtons';
import SortingContainer from '../modules/SortingContainer';
import StepButtons from '../modules/StepButtons';

import bubbleSort from '../algorithms/BubbleSort';
import _ from 'lodash';

function SortingVisualizer() {
  const generateRandomArray = React.useCallback((length) => {
    const numbers = Array.from({ length }, (_, i) => ({
      value: i + 1,
      isSorted: false,
      isComparing: false,
      isPartition: false,
    }));

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
  }, []);

  const [numElements, setNumElements] = React.useState(50); // [TODO] Add slider to change this
  const [arr, setArr] = React.useState(generateRandomArray(numElements));
  const [steps, setSteps] = React.useState([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);
  const [algorithm, setAlgorithm] = React.useState({
    name: 'Bubble Sort',
    function: bubbleSort,
    worseCase: 'n^2',
    averageCase: 'n^2',
    bestCase: 'n',
    memory: '1',
    stable: true,
    method: 'Exchanging',
    joke: false,
  });
  const [algorithmDescription, setAlgorithmDescription] = React.useState(algorithmDescriptions[algorithm.name]);
  const speeds = [50, 20, 5];
  const [speed, setSpeed] = React.useState(speeds[0]);

  const startSorting = () => {
    const deepCopyArr = _.cloneDeep(arr);
    const newSteps = [...(algorithm.function)(deepCopyArr)];
    setSteps(newSteps);

    if (intervalId) clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < newSteps.length - 1) {
          return prevStep + 1;
        } else {
          clearInterval(newIntervalId);
          return prevStep;
        }
      });
    }, speed);

    setIntervalId(newIntervalId);
  }

  const pauseSorting = () => {
    clearInterval(intervalId);
  };

  const stepReset = React.useCallback(() => {
    setCurrentStep(0);
    pauseSorting();
  }, [pauseSorting]);

  const stepForward = React.useCallback(() => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  }, [currentStep, steps.length]);

  const stepBackward = React.useCallback(() => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  }, [currentStep]);

  const displayArr = steps[currentStep] || arr;

  React.useEffect(() => {
    setAlgorithmDescription(algorithmDescriptions[algorithm.name]);
  }, [algorithm.name]);

  const cycleSpeeds = () => {
    setSpeed(prevSpeed => {
      const nextSpeedIndex = (speeds.indexOf(prevSpeed) + 1) % speeds.length;
      return speeds[nextSpeedIndex];
    });
  
    pauseSorting();
    startSorting();
  };
  

  return (
    <Box mt={3} mx="auto" 
      display={'flex'}
      flexDirection={'column'}
      height={'100%'}
      width={'90%'}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item>
          <ControlButtons startSorting={startSorting} pauseSorting={pauseSorting} cycleSpeeds={cycleSpeeds} speed={speed}/>
        </Grid>

        <Grid item>
          <StepButtons stepReset={stepReset} stepBackward={stepBackward} stepForward={stepForward} />
        </Grid>

        <Grid item>
          <AlgorithmSelector setAlgorithm={setAlgorithm} algorithm={algorithm} onChange={stepReset} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <SortingContainer arr={displayArr} numElements={numElements} />
      </Grid>

      <AlgorithmInfo algorithm={algorithm} algorithmDescription={algorithmDescription} />
    </Box>
  );
}

export default SortingVisualizer;
