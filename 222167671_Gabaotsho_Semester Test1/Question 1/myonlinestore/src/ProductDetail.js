import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading product details...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>Error loading product</p>;
  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Product not found</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "100%", height: "300px", objectFit: "contain", marginBottom: "20px" }} 
      />
      <h2>{product.title}</h2>
      <p><b>Price:</b> ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/" style={{ display: "inline-block", marginTop: "20px", color: "#6a329f" }}>← Back to the list of Products</Link>
    </div>
  );
}

export default ProductDetail;