import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <div className="app-wrapper">
            <Navbar />
            <div className="app-wrapper-content shadow">
              <Route
                exact
                path="/"
                component={() => {
                  window.history.pushState(null, null, "/profile");
                  return <Profile />;
                }}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/settings" component={Settings} />
              <Route path="/music" component={Music} />
              <Route path="/news" component={News} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
