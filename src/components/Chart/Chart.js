import React, { useContext } from "react";
import "./Chart.css";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GlobalContext } from "../../context/GlobalContext";
import { DateFormat } from "../../context/DateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { transactions } = useContext(GlobalContext);

  const incomes = transactions.filter((transaction) => {
    return transaction.type === "income";
  });

  const expenses = transactions.filter((transaction) => {
    return transaction.type === "expense";
  });

  const incomeLabels = incomes.map((inc) => {
    const { date } = inc;
    return DateFormat(date);
  });

  const expenseLabels = expenses.map((exp) => {
    const { date } = exp;
    return DateFormat(date);
  });

  const data = {
    labels: [...incomeLabels, ...expenseLabels],

    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expense",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div className="chart-style">
      <Line data={data} />
    </div>
  );
}

export default Chart;
