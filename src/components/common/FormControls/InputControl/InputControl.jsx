import React from "react";
import style from "./InputControl.module.css";

export default ({ input, meta, ...props }) => {
  return (
    <div
      className={`${style.textControl} ${
        meta.error && meta.touched ? style.error : ""
      }`}
    >
      <input {...input} {...props} />
      <span>{meta.error}</span>
    </div>
  );
};
