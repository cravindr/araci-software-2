// src/components/Layout.jsx

import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ContentArea from './ContentArea';

const Layout = () => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <ContentArea />
      </div>
    </div>
  );
};

export default Layout;
