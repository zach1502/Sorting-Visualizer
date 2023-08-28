import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import algorithms from '../utils/AlgorithmMetadata';

const AlgorithmSelector = (props) => {
  const { setAlgorithm, algorithm, onChange } = props;
  console.log(algorithm)
  return (
    <Autocomplete
      value={algorithm}
      onChange={(event, newValue) => {
        onChange(event);
        if (newValue) {
          setAlgorithm(newValue);
          console.log(newValue)
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

export default React.memo(AlgorithmSelector);