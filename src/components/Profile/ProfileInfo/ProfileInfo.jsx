import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/user.webp";

const ProfileInfo = (props) => {
  let avatar = !props.avatar ? defaultAvatar : props.avatar;
  return (
    <div>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default ProfileInfo;
