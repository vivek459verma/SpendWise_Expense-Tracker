/* eslint-disable no-unused-vars */
import React, { Fragment, useContext } from "react";
import "./Income.css";
import { GlobalContext } from "../../context/GlobalContext";
import IncomeItem from "../IncomeItem/IncomeItem";
import Form from "../Form/Form";

const Income = () => {
  const { transactions, deleteIncome } = useContext(GlobalContext);

  const totalAmounts = transactions.map((transaction) => {
    return transaction.type === "income" ? transaction.amount : 0;
  });

  const totalIncome = totalAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="income-style">
      <div className="inner-style">
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span> ${totalIncome}</span>
        </h2>

        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {transactions.map((transaction) => {
              return transaction.type === "income" ? (
                <IncomeItem
                  key={transaction.id}
                  id={transaction.id}
                  title={transaction.title}
                  description={transaction.description}
                  amount={transaction.amount}
                  date={transaction.date}
                  category={transaction.category}
                  deleteIncome={deleteIncome}
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

export default Income;
