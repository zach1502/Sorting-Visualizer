import React from 'react';
import { Box, Typography } from '@mui/material';

const Legend = () => {
  return (
    <Box 
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      width={'100%'}
      padding={2}
      borderBottom={1}
      borderLeft={1}
      borderRight={1}
      borderColor="grey.500"
    >
      <Box display={'flex'} flexDirection={'row'}>
        <Box width={20} height={20} bgcolor="red" marginRight={1}></Box>
        <Typography variant="body1">Unsorted</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <Box width={20} height={20} bgcolor="blue" marginRight={1}></Box>
        <Typography variant="body1">Comparing/Looking at</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <Box width={20} height={20} bgcolor="orange" marginRight={1}></Box>
        <Typography variant="body1">Partition</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <Box width={20} height={20} bgcolor="green" marginRight={1}></Box>
        <Typography variant="body1">Sorted</Typography>
      </Box>
    </Box>
  );
}

export default React.memo(Legend);
