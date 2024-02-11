/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./History.css";
import { GlobalContext } from "../../context/GlobalContext";
import { DateFormat } from "../../context/DateFormat";

function History() {
  const { transactions } = useContext(GlobalContext);

  //   INCOME
  const incomes = transactions.filter((transaction) => {
    return transaction.type === "income";
  });

  //   EXPENSES
  const expenses = transactions.filter((transaction) => {
    return transaction.type === "expense";
  });

  // HISTORY
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];

    // Sort the history array by date in descending order
    history.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return history.slice(0, 3);
  };

  const history = transactionHistory();

  return (
    <div className="history-style">
      <h2>Recent History</h2>
      {history.map((item) => {
        const { id, title, amount, type, date } = item;
        return (
          <div className="history-item" key={id}>
            <div>
              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {title}
              </p>
              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {DateFormat(date)}
              </p>
            </div>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-$${amount <= 0 ? 0 : amount}`
                : `+$${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default History;
