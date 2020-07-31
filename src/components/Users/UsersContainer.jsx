import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { getUsers, unFollow, follow } from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return <Users {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  isFolowing: state.usersPage.isFolowing,
});

export default connect(mapStateToProps, {
  getUsers,
  unFollow,
  follow,
})(UsersContainer);
