import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SortingVisualizer from './pages/SortingVisualizer';

function App() {
  return (
    <Router>
      <Route path="/" exact component={SortingVisualizer} />
    </Router>
  );
}

export default App;
