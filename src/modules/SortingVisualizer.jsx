import React, { useState } from 'react';
import ArrayBar from '../components/ArrayBar';
import bubbleSort from '../algorithms/BubbleSort';

import _ from 'lodash';

function SortingVisualizer() {
  const [arr, setArr] = useState(generateRandomArray(20));
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function generateRandomArray(length) {
    return Array.from({ length }, () => {
      return {
        value: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
        isSorted: false,
        isComparing: false
      };
    });
  }

  const startSorting = () => {
    const deepCopyArr = _.cloneDeep(arr);
    const newSteps = [...bubbleSort(deepCopyArr)];
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
    }, 200);
  
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

  return (
    <div>
      {displayArr.map((item, idx) => {
        let color = "blue";
        if (item.isComparing) {
          color = "red";
        } else if (item.isSorted) {
          color = "green";
        }
        return <ArrayBar key={idx} value={item.value} color={color} />;
      })}
      <button onClick={startSorting}>Start</button>
      <button onClick={stopSorting}>Stop</button>
      <button onClick={stepForward}>Next</button>
      <button onClick={stepBackward}>Back</button>
    </div>
  );
}

export default SortingVisualizer;
