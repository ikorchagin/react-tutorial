import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { getUsers, unFollow, follow } from "../../redux/users-reducer";
import { compose } from "redux";
import {
  selectUsers,
  selectTotalCount,
  selectCurrentPage,
  selectIsFetching,
  selectIsFolowing,
  selectPageSize,
} from "../../redux/users-selector";
import { selectIsAuth } from "../../redux/auth-selectors";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  return <Users {...props} />;
};

export default compose(
  connect(
    (state) => ({
      users: selectUsers(state),
      totalCount: selectTotalCount(state),
      pageSize: selectPageSize(state),
      currentPage: selectCurrentPage(state),
      isFetching: selectIsFetching(state),
      isFolowing: selectIsFolowing(state),
      isAuth: selectIsAuth(state),
    }),
    {
      getUsers,
      unFollow,
      follow,
    }
  )
)(UsersContainer);
