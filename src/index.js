import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderPage = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderPage(store.getState());

store.subscriber(renderPage);

serviceWorker.unregister();
