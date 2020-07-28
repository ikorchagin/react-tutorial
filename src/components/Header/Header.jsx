import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png"
            alt="logo"
          ></img>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
