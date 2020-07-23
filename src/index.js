import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";
import renderPage from "./render";

renderPage(state);

serviceWorker.unregister();
