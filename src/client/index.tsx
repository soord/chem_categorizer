import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "../components/Login/Login";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>,
  document.getElementById("app")
);