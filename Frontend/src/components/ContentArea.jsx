// src/components/ContentArea.jsx

import React from 'react';

const ContentArea = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <h1 className="m-0">Welcome to the Admin Dashboard</h1>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Example Card</h3>
                </div>
                <div className="card-body">
                  This is where your content will go. You can add widgets, tables, charts, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
