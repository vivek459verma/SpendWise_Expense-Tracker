/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "../Income/Income.css";
import { GlobalContext } from "../../context/GlobalContext";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const { transactions, deleteExpense } = useContext(GlobalContext);

  const totalAmounts = transactions.map((transaction) => {
    return transaction.type === "expense" ? transaction.amount : 0;
  });

  const totalExpenses = totalAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="income-style">
      <div className="inner-style">
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expenses: <span> ${totalExpenses}</span>
        </h2>

        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {transactions.map((transaction) => {
              return transaction.type === "expense" ? (
                <ExpenseItem
                  key={transaction.id}
                  id={transaction.id}
                  title={transaction.title}
                  description={transaction.description}
                  amount={transaction.amount}
                  date={transaction.date}
                  category={transaction.category}
                  deleteExpense={deleteExpense}
                  type={transaction.type}
                />
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
