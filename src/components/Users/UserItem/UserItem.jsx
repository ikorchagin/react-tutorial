import React from "react";
import style from "./UserItem.module.css";
import user_image from "../../../assets/images/user.webp";
import { NavLink } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className={style.userItem}>
      <div className={style.avatar}>
        <NavLink to={"profile/" + props.user.id}>
          {props.user.photos.small ? (
            <img src={props.user.photos.small} alt="" />
          ) : (
            <img src={user_image} alt="" />
          )}
        </NavLink>

        {props.user.followed ? (
          <button
            disabled={props.isFolowing.includes(props.user.id)}
            onClick={() => props.unFollow(props.user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.isFolowing.includes(props.user.id)}
            onClick={() => props.follow(props.user.id)}
          >
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
