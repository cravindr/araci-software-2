// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <span className="brand-text font-weight-light">Admin Dashboard</span>
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-cogs"></i>
                <p>Place</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Users</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-cogs"></i>
                <p>Settings</p>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/places" className="nav-link">
                <i className="nav-icon fas fa-map-marker-alt"></i>
                <p>Places</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customer" className="nav-link">
                <i className="nav-icon fas fa-map-marker-alt"></i>
                <p>Customer</p>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
