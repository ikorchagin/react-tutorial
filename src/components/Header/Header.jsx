import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  props.authMe();
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
          <NavLink className={style.link} to="/login">
            login
          </NavLink>
        ) : (
          <div className={style.links}>
            <NavLink className={style.link} to={"/profile"}>
              {props.login}
            </NavLink>
            <span
            className={style.link}
              onClick={() => {
                props.logout();
              }}
            >
              logout
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
