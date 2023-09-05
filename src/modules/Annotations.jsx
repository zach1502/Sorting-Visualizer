import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Annotations({ annotation }) {
  return (
    <Box mt={2} mb={2}
      display='flex'
      border={1}
      borderColor="grey.500"
      padding={2}
      width={'100%'}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">
            Annotations
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {annotation || 'To help you understand what is happening in the algorithm, some text will appear here.'}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(Annotations);
