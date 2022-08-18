import React, { useContext, useEffect, useState } from "react";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import Loading from "../components/Loading";
import OrderCard from "../components/OrderCard";
import OrdersContext from "../context/ordersContext";

function Orders() {
  const { orders, loading, error } = useContext(OrdersContext);

  return (
    <div className="orders-view">
      <div className="charts">
        <div className="chart">
          <BarChart data={orders} />
        </div>
        <div className="chart">
          <PieChart data={orders} />
        </div>
      </div>
      <h1>Orders</h1>
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : error ? (
        <p className="server-error-tag">Server error.</p>
      ) : orders?.length > 0 ? (
        <div className="orders-list">
          {orders.map((order) => (
            <OrderCard order={order} key={order.order_id} />
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Orders;
