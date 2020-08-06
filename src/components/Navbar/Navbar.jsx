import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink activeClassName={style.active} to="/profile/">
        <div className={style.item}>
          My profile
          <div></div>
        </div>
      </NavLink>
      <NavLink activeClassName={style.active} to="/dialogs">
        <div className={style.item}>
          Messages
          <div></div>
        </div>
      </NavLink>
      <NavLink activeClassName={style.active} to="/users">
        <div className={style.item}>
          Users
          <div></div>
        </div>
      </NavLink>
      <NavLink activeClassName={style.active} to="/news">
        <div className={style.item}>
          News
          <div></div>
        </div>
      </NavLink>
      <NavLink activeClassName={style.active} to="/music">
        <div className={style.item}>
          Music
          <div></div>
        </div>
      </NavLink>
      <NavLink activeClassName={style.active} to="/settings">
        <div className={style.item}>
          Settings
          <div></div>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
