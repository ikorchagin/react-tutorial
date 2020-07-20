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

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
            <Route path='/settings' component={Settings}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
