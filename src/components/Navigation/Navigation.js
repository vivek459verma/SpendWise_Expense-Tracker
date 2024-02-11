import React from "react";
import avatar from "../../images/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";
import "./Navigation.css";

const Navigation = ({ active, setActive }) => {
  return (
    <nav className="nav-style">
      <div className="title">
        <h1>SpendWise</h1>
      </div>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Vivek</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </nav>
  );
};

export default Navigation;
