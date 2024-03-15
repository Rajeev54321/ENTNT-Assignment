
import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  const totalProducts = 12;
  const totalOrders = 4;

  return (
    <div className="container">
      <h2 className="title">Dashboard - Simplified ERP System</h2>
      <div className="metricsContainer">
      <div>
      <div className="metric">
        <h3>Total Products</h3>
        <Link to="/product">
          <p>{totalProducts}</p>
        </Link>
      </div>
      <div className="metric">
        <h3>Total Orders</h3>
        <Link to="/order">
          <p>{totalOrders}</p>
        </Link>
      </div>
    </div>
        <div className="metric">
          <Link to="/product">
            <h3>Products Management</h3>
            <p>Manage Products</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Orders Management</h3>
            <p>Manage Orders</p>
          </Link>
        </div>
        <div className="order-container">
      
      <div className="dashboard-container">
  
        
        <div className="metric">
          <Link to="/Order">
            <h3>Calendar View</h3>
            <p>View Orders Calendar</p>
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Dashboard;
