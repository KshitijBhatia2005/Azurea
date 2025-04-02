import { useState, useEffect } from "react";

export default function Browse() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.retailedinventory.com/fashionnova", {
          headers: {
            "Authorization": "0baa7de3-f5ac-4923-83e4-14bb5265dbc2", // Your API Key
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        setProducts(data.products || []); // Adjust based on actual response structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Browse Fashion Nova Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                background: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/250"}
                alt={product.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{product.name}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {product.description || "No description available"}
              </p>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>{product.price || "Price not available"}</p>
              <button
                style={{
                  background: "#000",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
