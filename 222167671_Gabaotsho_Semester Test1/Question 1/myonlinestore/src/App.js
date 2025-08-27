import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>Error fetching products</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Hustlers Empire</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;



