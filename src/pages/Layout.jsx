// src/components/Layout.js
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import BackToTop from '../utils/ScrollToTop';

function Layout({ children }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Algorithm Visualizer
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/sorting">Sorting</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <div id="back-to-top-anchor" />
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
      <BackToTop />
    </Box>
  );
}

export default Layout;
