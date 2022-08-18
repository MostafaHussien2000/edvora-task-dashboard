import React, { useContext } from "react";
import ProductsContext from "../context/productsContext";
import OrdersContext from "../context/ordersContext";

function OrderCard({ order }) {
  const { products } = useContext(ProductsContext);
  const { setOrders } = useContext(OrdersContext);

  const orderedProduct = products?.filter(
    (prod) => prod.product_id === order.product_id
  )[0];

  return (
    <div className="order-card">
      <table>
        <tbody>
          <tr>
            <td>Order Name</td>
            <td>{orderedProduct?.name}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{order?.quantity}</td>
          </tr>
        </tbody>
      </table>
      <div className="bottom">
        <div className="date">
          <p>{new Date(parseInt(order?.order_date)).toDateString()}</p>
        </div>
        <div className="price">
          <p>Total</p>
          <p>${order?.quantity * orderedProduct?.selling_price}</p>
        </div>
      </div>
      <div className="actions">
        <button
          onClick={(e) => {
            window.alert("Order Satsified!");
            setOrders((orders) =>
              orders.filter((ord) => ord.order_id !== order.order_id)
            );
          }}
        >
          Satisfy
        </button>
        <button
          onClick={(e) => {
            if (
              window.confirm(
                `Do you really want to delete order number ${order.order_id} ?`
              )
            ) {
              setOrders((orders) =>
                orders.filter((ord) => ord.order_id !== order.order_id)
              );
            }
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
