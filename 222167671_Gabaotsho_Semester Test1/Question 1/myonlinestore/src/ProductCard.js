import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold", color: "#90EE90" }}>${product.price}</p>
      <Link to={`/products/${product.id}`} style={{ color: "#90EE90" }}>View Details</Link>
    </div>
  );
}

export default ProductCard;
