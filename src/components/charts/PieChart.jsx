import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import ProductsContext from "../../context/productsContext";
import Loading from "../Loading";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const { products, loading } = useContext(ProductsContext);
  let sortedData = data.sort((a, b) => (a.quantity > b.quantity ? -1 : 1));

  const topFiveProducts = sortedData.slice(0, 5).map((order) => {
    const product = products.filter(
      (prod) => prod.product_id === order.product_id
    )[0];

    return {
      ...order,
      product_name: product.name,
    };
  });

  const names = topFiveProducts.map((prod) => prod.product_name);

  const quantites = topFiveProducts.map((prod) => prod.quantity);

  const chartData = {
    labels: names,
    datasets: [
      {
        label: "Top Five Ordered Products",
        data: quantites,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return loading ? (
    <center>
      <Loading />
    </center>
  ) : (
    <Pie data={chartData} />
  );
}

export default PieChart;
