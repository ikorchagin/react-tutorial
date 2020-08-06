import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { authMe } from "../../redux/auth-reducer";
import { selectIsAuth } from "../../redux/auth-selectors";

let mapStateToProps = (state) => ({
  isAuth: selectIsAuth(state),
});

export default connect(mapStateToProps, { authMe })(Login);
