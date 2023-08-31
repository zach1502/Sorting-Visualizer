import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortingVisualizer from './pages/SortingVisualizer';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* // <Route path="/" element={<Index />} /> */}
          <Route path="/sorting" element={<SortingVisualizer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
