import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Slider } from '@mui/material';
import ArrayDisplay from '../components/ArrayDisplay';
import AlgorithmSelector from '../components/AlgorithmSelector'
import algorithmDescriptions from '../utils/AlgorithmDescriptions';

import bubbleSort from '../algorithms/BubbleSort';

import _ from 'lodash';

function SortingVisualizer() {
  const [numElements, setNumElements] = useState(50); // [TODO] Add slider to change this
  const [arr, setArr] = useState(generateRandomArray(numElements));
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [algorithm, setAlgorithm] = useState({
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
  const [algorithmDescription, setAlgorithmDescription] = useState(algorithmDescriptions[algorithm.name]);
  const [speed, setSpeed] = useState(40); // ms

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
    }, speed);

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
    pauseSorting();
  }

  const stepForward = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }

  const stepBackward = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  const displayArr = steps[currentStep] || arr;

  React.useEffect(() => {
    setAlgorithmDescription(algorithmDescriptions[algorithm.name]);
  }, [algorithm.name]);

  return (
    <Box mt={3} mx="auto" width="90%">
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        {/* Control buttons */}
        <Grid item>
          <ButtonGroup
            variant="contained"
            aria-label="Control button group"
          >
            <Button onClick={startSorting}>Play</Button>
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
            onChange={stepReset}
          />
        </Grid>
      </Grid>

      {/* Display area */}
      <Grid item xs={12}>
        <Box mt={2} p={2} border={1}
          display='flex'
          borderColor="grey.500"
          borderRadius="borderRadius"
          height="50vh"
          width='100%'
          paddingTop={4}
          alignItems='flex-end'
        >
          <ArrayDisplay arr={displayArr} numElements={numElements} />
        </Box>
      </Grid>

      {/* Alg Info */}
      <Grid container item spacing={2}>
        <Grid item md={8} xs={12}>
          <Box mt={2} p={2} border={1}
            borderColor="grey.500"
            borderRadius="borderRadius"
            paddingTop={4}
          >
            <Typography variant="h2" gutterBottom>
              {algorithm.name}
            </Typography>
            {algorithmDescription.paragraph}
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <TableContainer component={Box} border={1} borderColor="grey.500" borderRadius="borderRadius" mt={2} p={2}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell><Typography>Sorting Method</Typography></TableCell>
                  <TableCell><Typography>{algorithm.method}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography>Best Case</Typography></TableCell>
                  <TableCell><Typography>{algorithm.bestCase}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography>Average Case</Typography></TableCell>
                  <TableCell><Typography>{algorithm.averageCase}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography>Worst Case</Typography></TableCell>
                  <TableCell><Typography>{algorithm.worseCase}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography>Memory</Typography></TableCell>
                  <TableCell><Typography>{algorithm.memory}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography>Stable</Typography></TableCell>
                  <TableCell><Typography>{algorithm.stable ? 'Yes' : 'No'}</Typography></TableCell>
                </TableRow>
                {algorithm.joke ?
                  <TableRow>
                    <TableCell><Typography>Joke</Typography></TableCell>
                    <TableCell><Typography>Yes</Typography></TableCell>
                  </TableRow> :
                  null
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SortingVisualizer;
