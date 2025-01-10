// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for React Router v6
import Sidebar from './components/Sidebar';
import Place from './components/Place';
import Customer from './components/Customer';

const App = () => {
  return (
    <Router>
      <Sidebar /> {/* Make sure Sidebar is rendered */}
      <div className="content-wrapper">
        <Routes>
          {/* Define the route for Places */}
          <Route path="/places" element={<Place />} />
          <Route path="/customer" element={<Customer />} />
          {/* Add other routes here */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
