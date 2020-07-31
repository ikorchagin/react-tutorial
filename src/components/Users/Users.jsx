import React from "react";
import UserItem from "./UserItem/UserItem";
import PreLoader from "../PreLoader/PreLoader";
import style from "./Users.module.css";
import Axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let totalPages = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = props.currentPage; i < props.currentPage + 10; i++) {
    pages.push(i);
  }
  return (
    <div className={style.users}>
      <div>
        {props.isFetching ? (
          <PreLoader />
        ) : (
          props.users.map((x) => (
            <UserItem
              user={x}
              follow={props.follow}
              unFollow={props.unFollow}
              isFolowing={props.isFolowing}
            />
          ))
        )}
      </div>
      <div className={style.page_numbers}>
        {pages.map((x) => (
          <span
            onClick={() => {
              props.getUsers(x, props.pageSize);
            }}
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
