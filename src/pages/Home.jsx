import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1" gutterBottom>
        Algorithm Visualizer
      </Typography>
      <Typography variant="h5" gutterBottom>
        Understand algorithms better by visualizing them.
      </Typography>
      <Button variant="contained" color="primary" size="large" href='/sorting'>
        Get Started With Sorting Algorithms
      </Button>
    </Box>
  );
};

export default Home;
