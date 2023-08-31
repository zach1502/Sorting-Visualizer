// src/components/Layout.js
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorting Visualizer
          </Typography>
          <Button color="inherit" component={Link} to="/sorting">Sorting Visualizer</Button>
        </Toolbar>
      </AppBar>

      {children}
    </Box>
  );
}

export default Layout;
