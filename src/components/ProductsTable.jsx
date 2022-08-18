import React, { useEffect } from "react";

function ProductsTable({ products }) {
  useEffect(() => {}, [products]);
  return (
    <table cellPadding="0" cellSpacing="0" border="0">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Stock</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products?.map((prod) => (
          <tr key={prod.product_id}>
            <td>{prod.product_id}</td>
            <td>{prod.name}</td>
            <td className={parseInt(prod.stock) < 25 ? "low-stock" : ""}>
              {prod.stock}
            </td>
            <td>${prod.selling_price}</td>
            <td>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.665"
                  height="18.294"
                  viewBox="0 0 16.665 18.294"
                >
                  <g
                    id="Icon_feather-trash-2"
                    data-name="Icon feather-trash-2"
                    transform="translate(-3.5 -2)"
                  >
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M4.5,9H19.165"
                      transform="translate(0 -2.741)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_19"
                      data-name="Path 19"
                      d="M18.906,6.259V17.665a1.629,1.629,0,0,1-1.629,1.629H9.129A1.629,1.629,0,0,1,7.5,17.665V6.259m2.444,0V4.629A1.629,1.629,0,0,1,11.574,3h3.259a1.629,1.629,0,0,1,1.629,1.629V6.259"
                      transform="translate(-1.371)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_20"
                      data-name="Path 20"
                      d="M15,16.5v4.888"
                      transform="translate(-4.797 -6.168)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_21"
                      data-name="Path 21"
                      d="M21,16.5v4.888"
                      transform="translate(-7.538 -6.168)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
                <p>Delete</p>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
