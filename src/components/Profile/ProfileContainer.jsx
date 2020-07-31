import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  componentWillUnmount() {
    this.props.setProfile(null);
  }

  render() {
    return <Profile currentProfile={this.props.currentProfile} />;
  }
}

let mapStateToProps = (state) => ({
  currentProfile: state.profilePage.currentProfile,
});

export default connect(mapStateToProps, { getProfile, setProfile })(
  withRouter(ProfileContainer)
);
