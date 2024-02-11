/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

const initialState = {
  transactions: localStorageTransactions || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  function deleteIncome(id) {
    dispatch({
      type: "DELETE_INCOME_TRANSACTION",
      payload: id,
    });
  }

  function addIncome(transaction) {
    dispatch({
      type: "ADD_INCOME_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: "DELETE_EXPENSE_TRANSACTION",
      payload: id,
    });
  }

  function addExpense(transaction) {
    dispatch({
      type: "ADD_EXPENSE_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteIncome,
        addIncome,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
