import React from "react";
import style from "./TextAreaControl.module.css";

export default ({ input, meta, ...props }) => {
  return (
    <div className={`${style.textControl} ${meta.error && meta.touched ? style.error : ""}`}>
      <textarea {...input} {...props} />
      <span>{meta.error}</span>
    </div>
  );
};
