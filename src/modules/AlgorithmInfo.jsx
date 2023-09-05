import { Box, Grid, Table, TableBody, TableContainer, TableRow, TableCell, Typography } from '@mui/material';

function AlgorithmInfo({ algorithm, algorithmDescription }) {
  return (
    <Grid container item spacing={2}>
      <Grid item md={8} xs={12}>
        <Box p={2} border={1} borderColor="grey.500" borderRadius="borderRadius" paddingTop={4}>
          <Typography variant="h2" gutterBottom>
            {algorithm.name}
          </Typography>
          {algorithmDescription.description}
        </Box>
      </Grid>

      <Grid item md={4} xs={12}>
        <TableContainer component={Box} border={1} borderColor="grey.500" borderRadius="borderRadius" p={2}>
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
  );
}

export default AlgorithmInfo;
