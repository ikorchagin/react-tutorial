import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/user.webp";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  let avatar = !props.avatar ? defaultAvatar : props.avatar;
  return (
    <div>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <div>{props.name}</div>
      <ProfileStatus status={props.description} setStatus={props.setStatus} />
    </div>
  );
};

export default ProfileInfo;
