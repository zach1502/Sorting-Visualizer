import React from 'react';
import {Box} from '@mui/material';
import SortingVisualizer from '../modules/SortingVisualizer';

const Index = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <SortingVisualizer/>
    </Box>
  );
}

export default Index;
