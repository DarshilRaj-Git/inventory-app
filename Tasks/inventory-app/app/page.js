"use client";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <header>
        <h1>Inventory Manager</h1>
        <nav>
          <a href="/products">Products</a>
          <a href="/add">Add Product</a>
          <a href="/test">Test CRUD</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h2>Welcome to Inventory Dashboard</h2>
        <p>Manage your products efficiently and easily!</p>
        <a href="/products" className="btn btn-blue">View Products</a>
        <a href="/add" className="btn btn-green">Add Product</a>
        <a href="/test" className="btn btn-red">Test CRUD</a>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stats-card">
          <h3>Total Products</h3>
          <p>120</p>
        </div>
        <div className="stats-card">
          <h3>Active Orders</h3>
          <p>45</p>
        </div>
        <div className="stats-card">
          <h3>Low Stock</h3>
          <p>10</p>
        </div>
        <div className="stats-card">
          <h3>Total Users</h3>
          <p>60</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-container">
        <div className="product-card">
          <img src="https://via.placeholder.com/250x180" alt="Product"/>
          <div className="product-info">
            <h3>Product Name</h3>
            <p>Short description</p>
            <p className="price">₹999</p>
            <button>View Details</button>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Inventory App. All rights reserved. <a href="#">Contact</a></p>
      </footer>
    </>
  );
}
