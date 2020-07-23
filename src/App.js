import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { Route, Router, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { addPost } from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <div className="app-wrapper">
            <Navbar />
            <div className="app-wrapper-content shadow">
              <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
              <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={addPost} />} />
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
