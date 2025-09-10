"use client";
import { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "lib/firestoreFunctions";
import "./test.css";

export default function TestCRUD() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <>
      <header>
        <h1>Inventory Manager</h1>
        <nav>
          <a href="/products">Products</a>
          <a href="/add">Add Product</a>
          <a href="/test">Test CRUD</a>
        </nav>
      </header>

      <div className="crud-container">
        <div className="button-group">
          <button className="btn-blue" onClick={fetchProducts}>Refresh Products</button>
          <button className="btn-green" onClick={() => alert('Add Product Clicked')}>Add Product</button>
        </div>

        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4">No products available.</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>₹{product.price}</td>
                  <td>
                    <button className="btn-red" onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <footer>
        <p>© 2025 Inventory App. All rights reserved. <a href="#">Contact</a></p>
      </footer>
    </>
  );
}
