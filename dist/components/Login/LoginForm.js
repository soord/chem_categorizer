"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./login.scss");
const LoginForm = () => {
    return (react_1.default.createElement("div", { id: "loginform" },
        react_1.default.createElement(FormHeader, { title: "Login" }),
        react_1.default.createElement(Form, null)));
};
const FormHeader = ({ title }) => (react_1.default.createElement("h2", { id: "headerTitle" }, title));
const Form = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(FormInput, { description: "Username", placeholder: "Enter your username", type: "text" }),
        react_1.default.createElement(FormInput, { description: "Password", placeholder: "Enter your password", type: "password" }),
        react_1.default.createElement(FormButton, { title: "Log in" })));
};
const FormButton = ({ title }) => {
    return (react_1.default.createElement("div", { id: "button", className: "row" },
        react_1.default.createElement("button", null, title)));
};
const FormInput = ({ description, type, placeholder }) => {
    return (react_1.default.createElement("div", { className: "row" },
        react_1.default.createElement("label", null, description),
        react_1.default.createElement("input", { type: type, placeholder: placeholder })));
};
exports.default = LoginForm;
