import React, { Component } from "react";
import Header from "./Header";
import { authMe } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} authMe={this.props.authMe} />;
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  email: state.auth.email,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { authMe })(HeaderContainer);
