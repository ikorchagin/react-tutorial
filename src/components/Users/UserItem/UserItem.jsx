import React from "react";
import style from "./UserItem.module.css";
import user_image from "../../../assets/images/user.webp";

const UserItem = (props) => {
  return (
    <div className={style.userItem}>
      <div className={style.avatar}>
        {props.user.photos.small ?? (
          <img src={user_image} alt="" />
        )}
        {props.user.followed ? (
          <button onClick={() => props.changeFollow(props.user.id, false)}>
            Unfollow
          </button>
        ) : (
          <button onClick={() => props.changeFollow(props.user.id, true)}>
            Follow
          </button>
        )}
      </div>
      <div className={style.info}>
        <h3>{props.user.name}</h3>
      </div>
    </div>
  );
};

export default UserItem;
