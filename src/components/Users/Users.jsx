import React from "react";
import UserItem from "./UserItem/UserItem";
import PreLoader from "../PreLoader/PreLoader";
import style from "./Users.module.css";

const Users = ({
  follow,
  unFollow,
  isFolowing,
  users,
  pageSize,
  getUsers,
  isFetching,
  currentPage,
  totalCount,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  console.log(totalPages);
  return (
    <div className={style.users}>
      <div>
        {isFetching ? (
          <PreLoader />
        ) : (
          users.map((x) => (
            <UserItem
              user={x}
              follow={follow}
              unFollow={unFollow}
              isFolowing={isFolowing}
            />
          ))
        )}
      </div>
      <div className={style.page_numbers}>
        {/* {pages.map((x) => (
          <span
            onClick={() => {
              getUsers(x, pageSize);
            }}
          >
            {x}
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default Users;
