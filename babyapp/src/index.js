import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import shoppingCart from "./components/shoppingCart";


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>, 
  document.body.appendChild(document.createElement("div"))
);

// ReactDOM.render(<div>hodayazim 1055</div>, document.getElementById("root)"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
