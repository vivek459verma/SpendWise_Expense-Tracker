import React, { useContext } from "react";
import "./DashBoard.css";
import Chart from "../Chart/Chart";
import { GlobalContext } from "../../context/GlobalContext";
import { dollar } from "../../utils/icons";
import History from "../History/History";

const DashBoard = () => {
  const { transactions } = useContext(GlobalContext);

  //   INCOME
  const incomes = transactions.filter((transaction) => {
    return transaction.type === "income";
  });

  //   EXPENSES
  const expenses = transactions.filter((transaction) => {
    return transaction.type === "expense";
  });

  // TOTAL INCOME
  const incomeAmount = transactions.map((transaction) => {
    return transaction.type === "income" ? transaction.amount : 0;
  });

  const totalIncome = incomeAmount.reduce((acc, item) => (acc += item), 0);

  // TOTAL EXPENSES
  const expenseAmount = transactions.map((transaction) => {
    return transaction.type === "expense" ? transaction.amount : 0;
  });

  const totalExpenses = expenseAmount.reduce((acc, item) => (acc += item), 0);

  // TOTAL BALANCE
  const totalBalance = () => {
    return totalIncome - totalExpenses;
  };

  return (
    <div className="dashboard-style">
      <div className="inner-style">
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span> Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span> Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
