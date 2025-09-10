"use client";
import { useState } from "react";
import { addProduct } from "lib/firestoreFunctions";
import "./add.css";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!name || !price || !description) return alert("Fill all fields");
    await addProduct({ name, price: Number(price), description });
    setName("");
    setPrice("");
    setDescription("");
    alert("Product added successfully!");
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

      <div className="form-container">
        <h2>Add New Product</h2>
        <div className="form-field">
          <label>Product Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btn-submit" onClick={handleAdd}>Add Product</button>
      </div>

      <footer>
        <p>© 2025 Inventory App. All rights reserved. <a href="#">Contact</a></p>
      </footer>
    </>
  );
}
