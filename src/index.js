import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";

import { countAddAction } from "./actions/counter_action";
import { loadPostsAction } from "./actions/post_action";

console.log(store);
console.log(store.getState());

store.dispatch(countAddAction);
store.dispatch(countAddAction);
store.dispatch(loadPostsAction);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
