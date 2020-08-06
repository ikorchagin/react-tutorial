import React, { Component } from "react";
import Header from "./Header";
import { authMe, logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import {
  selectLogin,
  selectEmail,
  selectUserId,
  selectIsAuth,
} from "../../redux/auth-selectors";

const HeaderContainer = (props) => {
  return <Header {...props} authMe={props.authMe} />;
};

let mapStateToProps = (state) => ({
  login: selectLogin(state),
  email: selectEmail(state),
  userId: selectUserId(state),
  isAuth: selectIsAuth(state),
});
export default connect(mapStateToProps, { logout, authMe })(HeaderContainer);
