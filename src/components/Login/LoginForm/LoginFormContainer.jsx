import React from "react";

import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { goLogin } from "../../../redux/auth-reducer";
import withCheckAuth from "../../../hoc/withCheckAuth";

export default compose(
  reduxForm({ form: "login" }),
  connect(null, { goLogin })
)(LoginForm);
