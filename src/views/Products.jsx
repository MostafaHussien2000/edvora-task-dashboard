import React, { useContext } from "react";

import Loading from "../components/Loading";
import ProductsPagination from "../components/ProductsPagination";
import ProductsContext from "../context/productsContext";

function Products() {
  const { products, loading, error } = useContext(ProductsContext);

  return (
    <div className="products-view">
      <div className="states">
        <div className="state">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42.173"
              height="46.868"
              viewBox="0 0 42.173 46.868"
            >
              <g
                id="Icon_feather-box"
                data-name="Icon feather-box"
                transform="translate(1 1.057)"
              >
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M44.673,34.244V16.389a4.464,4.464,0,0,0-2.232-3.861L26.818,3.6a4.464,4.464,0,0,0-4.464,0L6.732,12.528A4.464,4.464,0,0,0,4.5,16.389V34.244A4.464,4.464,0,0,0,6.732,38.1l15.623,8.927a4.464,4.464,0,0,0,4.464,0L42.441,38.1a4.464,4.464,0,0,0,2.232-3.861Z"
                  transform="translate(-4.5 -3.003)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M4.905,10.44,24.389,21.711,43.873,10.44"
                  transform="translate(-4.302 0.625)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M18,40.5V18"
                  transform="translate(2.086 4.314)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <div className="text">
            <p>Total Products Number</p>
            <h1>{products?.length}</h1>
          </div>
        </div>
      </div>
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
        <ProductsPagination />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Products;
