/* eslint-disable no-unused-vars */
import React from "react";
import "./ExpenseItem.css";

import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/icons";
import Button from "../Button/Button";
import { DateFormat } from "../../context/DateFormat";

function ExpenseItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteExpense,
  type,
}) {
  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <div className="expense-item-style">
      <div className="icon">{type === "expense" ? expenseCatIcon() : ""}</div>
      <div className="content2">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {dollar} {amount}
            </p>
            <p>
              {calender} {DateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteExpense(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
