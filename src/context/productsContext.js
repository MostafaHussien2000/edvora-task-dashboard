import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
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
    <ProductsContext.Provider value={{ products, setProducts, error, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
