import React from "react";
import UserItem from "./UserItem/UserItem";
import Axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    let url = "https://social-network.samuraijs.com/api/1.0";

    let users = Axios.get(`${url}/users`, {
      headers: {
        "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
      },
    }).then((x) => {
      debugger;
      props.setUsers(x.data.items);
      console.log(x.data.items);
    });
  }

  return (
    <div>
      {props.users.map((x) => (
        <UserItem user={x} changeFollow={props.changeFollow} />
      ))}
    </div>
  );
};

export default Users;
