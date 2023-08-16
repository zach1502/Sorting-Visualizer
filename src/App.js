import React from 'react';
import Index from './pages';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
        <Index/>
      </Box>
    </>
  );
}

export default App;
