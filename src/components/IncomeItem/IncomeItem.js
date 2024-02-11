/* eslint-disable no-unused-vars */
import React from "react";
import "./IncomeItem.css";
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

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteIncome,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  return (
    <div className="income-item-style">
      <div className="icon">{type === "income" ? categoryIcon() : ""}</div>
      <div className="content1">
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
              onClick={() => deleteIncome(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
