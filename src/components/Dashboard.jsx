import React from "react";

import { Routes, Route } from "react-router-dom";

import Orders from "../views/Orders";
import Products from "../views/Products";

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-content">
        <Routes>
          <Route
            exact
            index
            path="/products"
            element={
              <>
                <Products />
              </>
            }
          />
          <Route
            exact
            index
            path="/orders"
            element={
              <>
                <Orders />
              </>
            }
          />
        </Routes>
      </section>
    </div>
  );
}

export default Dashboard;
