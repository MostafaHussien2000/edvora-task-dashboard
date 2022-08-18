import { createContext, useEffect, useState } from "react";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://assessment.api.vweb.app/orders");

    return response.json();
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setLoading(false);
        setOrders(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, setOrders, error, loading }}>
      {children}
    </OrdersContext.Provider>
  );
}

export default OrdersContext;
