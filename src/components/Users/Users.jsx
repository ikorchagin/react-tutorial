import React from "react";
import UserItem from "./UserItem/UserItem";
import PreLoader from "../common/PreLoader/PreLoader";
import style from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";

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
  if (isFetching) {
    return <PreLoader />;
  }
  return (
    <div className={style.users}>
      <div>
        {users.map((x) => (
          <UserItem
            user={x}
            follow={follow}
            unFollow={unFollow}
            isFolowing={isFolowing}
          />
        ))}
      </div>

      <Paginator
        totalCount={totalCount}
        portionSize={5}
        onPageClick={(id) => {
          getUsers(id, pageSize);
        }}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Users;
