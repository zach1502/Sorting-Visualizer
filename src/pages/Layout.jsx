// src/components/Layout.js
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Link as MuiLink } from '@mui/material';
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

      <Container>
        {children}
      </Container>

      <Box mt={5} bgcolor="#f1f1f1" color="black" p={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Built by Zachary Chan • '}
          <MuiLink color="inherit" href="https://github.com/zach1502">
            GitHub
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;
