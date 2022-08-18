import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";
import ProductsPagination from "../components/ProductsPagination";

function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://assessment.api.vweb.app/products");

    return response.json();
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);
  return (
    <div className="products-view">
      <h1>All Availabel Products</h1>
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <center>
          <p className="server-error-tag">Server error.</p>
        </center>
      ) : products?.length > 0 ? (
        <ProductsPagination products={products} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Products;
