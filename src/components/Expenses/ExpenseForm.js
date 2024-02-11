/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./ExpenseForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../context/GlobalContext";
import { plus } from "../../utils/icons";
import Button from "../Button/Button";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { addExpense } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      title,
      amount: +amount,
      date,
      category,
      description,
      type,
    };

    addExpense(newTransaction);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setDescription("");
    setType("expense");
  };

  return (
    <form className="expense-form-style" onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense Title..."
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          name={"amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          value={date}
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDate(date)}
        />
      </div>
      <div className="selects1 input-control">
        <select
          required
          name="type"
          id="type"
          value="expense"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense" disabled>
            Expense
          </option>
        </select>
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Expense"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
