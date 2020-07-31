import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png"
            alt="logo"
          ></img>
        </NavLink>
        {!props.isAuth ? (
          <span className={style.link} onClick={() => props.authMe()}>
            login
          </span>
        ) : (
          <NavLink
          className={style.link}
            to={`profile/${props.userId}`}
          >
            {props.login}
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
