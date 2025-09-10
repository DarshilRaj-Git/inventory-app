"use client";
import { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "lib/firestoreFunctions";
import "./products1.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch products when page loads
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAdd = async () => {
    if (!name || !price) return alert("Please fill all fields");
    await addProduct({ name, price: Number(price), description: "Product description" });
    setName("");
    setPrice("");
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Buttons */}
      <div className="flex flex-col gap-4 max-w-xs mx-auto mb-8">
        <a
          href="/products"
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded text-center hover:bg-blue-600 transition"
        >
          View Products
        </a>
        <a
          href="/add"
          className="bg-green-500 text-white font-semibold px-6 py-2 rounded text-center hover:bg-green-600 transition"
        >
          Add Product
        </a>
        <a
          href="/test"
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded text-center hover:bg-red-600 transition"
        >
          Test CRUD Functions
        </a>
      </div>

      {/* Add Product Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-4 py-2 border rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded w-full md:w-1/4 transition"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Available Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-600 text-center">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-gray-900 font-bold">₹{product.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
