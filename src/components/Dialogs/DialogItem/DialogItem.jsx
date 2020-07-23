import React from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={`${style.dialog} ${props.isActive ? style.active : ""}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
