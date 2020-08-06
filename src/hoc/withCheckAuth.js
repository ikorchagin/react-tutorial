import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectIsAuth } from "../redux/auth-selectors";

export default (Component) =>
  connect((state) => ({ isAuth: selectIsAuth(state) }))((props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }

    return <Component />;
  });
