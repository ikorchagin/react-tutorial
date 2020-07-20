import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
