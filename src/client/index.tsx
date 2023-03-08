import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginForm from "../components/Login/LoginForm";
import "./styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoginForm />
  </React.StrictMode>,
  document.getElementById("app")
);