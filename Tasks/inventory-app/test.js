import { useEffect, useState } from "react";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../lib/firestoreFunctions";

export default function TestPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  // Add a new product
  const handleAdd = () => {
    const newProduct = {
      name: "Laptop",
      quantity: 10,
      price: 55000,
      category: "Electronics",
    };
    addProduct(newProduct);
  };

  // Update first product (example)
  const handleUpdate = () => {
    if (products[0]) {
      updateProduct(products[0].id, { quantity: 20, price: 50000 });
    }
  };

  // Delete first product (example)
  const handleDelete = () => {
    if (products[0]) {
      deleteProduct(products[0].id);
    }
  };

  return (
    <div>
      <h1>Test CRUD</h1>
      <button onClick={handleAdd}>Add Product</button>
      <button onClick={handleUpdate}>Update First Product</button>
      <button onClick={handleDelete}>Delete First Product</button>

      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.quantity} pcs - ₹{product.price}
        </div>
      ))}
    </div>
  );
}
