import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import ProductsContext from "../../context/productsContext";
import Loading from "../Loading";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function BarChart({ data, year = 1970 }) {
  const { loading } = useContext(ProductsContext);

  const monthesSum = {
    0: 0, // Jan
    1: 0, // Feb
    2: 0, // Mar
    3: 0, // Apr
    4: 0, // May
    5: 0, // Jun
    6: 0, // Jul
    7: 0, // Aug
    8: 0, // Sep
    9: 0, // Oct
    10: 0, // Nov
    11: 0, // Dec
  };

  data.forEach((order) => {
    if (new Date(parseInt(order.order_date)).getFullYear() === year) {
      const orderMonth = new Date(parseInt(order.order_date)).getMonth();
      const currentNum = monthesSum[orderMonth];
      monthesSum[orderMonth] = currentNum + order.quantity;
    }
  });

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders State for year 1970",
        data: Object.values(monthesSum),
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          "#BC75E7",
        ],
        borderColor: ["transparent"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    maintainAspectRation: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 16,
      },
    },
  };
  return loading ? (
    <center>
      <Loading />
    </center>
  ) : (
    <Bar height={400} data={chartData} options={options} />
  );
}

export default BarChart;
