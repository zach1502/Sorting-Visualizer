import React from "react";
import ArrayDisplay from '../components/ArrayDisplay';
import { Box } from '@mui/material';

function SortingContainer({ arr, numElements }) {
  return (
    <Box mt={2} p={2} border={1}
      display='flex'
      borderColor="grey.500"
      height="50vh"
      width='100%'
      paddingTop={4}
      alignItems='flex-end'
    >
      <ArrayDisplay arr={arr} numElements={numElements} />
    </Box>
  );
}

export default React.memo(SortingContainer);
