import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortingVisualizer from './pages/SortingVisualizer';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          {/* <Route path='/graphs' element={<Graphs />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
