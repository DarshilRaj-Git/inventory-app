"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../../src/lib/firestoreFunctions";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="space-y-2">
        {products.length === 0 && <p>No products found.</p>}
        {products.map((p) => (
          <div key={p.id} className="p-4 border rounded flex justify-between">
            <span>
              {p.name} - {p.quantity} pcs - ₹{p.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
