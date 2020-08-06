import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/ProfileContainer";
import { Route, Redirect, withRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return null;
    }
    return (
      <div>
        <Header />
        <div className="main-content">
          <div className="app-wrapper">
            <Navbar />
            <div className="app-wrapper-content shadow">
              <Route
                path="/dialogs"
                component={() => {
                  document.title = "Dialogs";
                  return <DialogsContainer />;
                }}
              />
              <Route exact path="/profile/:userId?" component={Profile} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/settings" component={Settings} />
              <Route path="/music" component={Music} />
              <Route path="/news" component={News} />
              <Route path="/login" component={Login} />
              <Route exact path="/" render={() => <Redirect to="/profile" />} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect((state) => ({ isInitialized: state.app.isInitialized }), {
    initializeApp,
  })
)(App);
