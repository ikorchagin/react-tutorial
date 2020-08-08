import React, { Component, useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, getInfo, setStatus } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import { selectIsAuth, selectUserId } from "../../redux/auth-selectors";
import {
  selectCurrentProfile,
  selectCurrentStatus,
} from "../../redux/profile-selectors";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.userId;
    }
    props.getInfo(userId);
    return () => {
      props.setProfile(null);
    }
  }, [props.match.params.userId]);

  if (props.match.params.userId === undefined && !props.isAuth) {
    return <Redirect to="/login" />;
  }

  return <Profile {...props} />;
};

export default compose(
  withRouter,
  connect(
    (state) => ({
      currentProfile: selectCurrentProfile(state),
      isAuth: selectIsAuth(state),
      userId: selectUserId(state),
      currentStatus: selectCurrentStatus(state),
    }),
    { setProfile, getInfo, setStatus }
  )
)(ProfileContainer);
