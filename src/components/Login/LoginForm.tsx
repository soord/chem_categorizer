import React from "react";
import './login.scss';

export interface headerProps {
  title: string
}

export interface loginInputFieldProps {
  description: string,
  placeholder: string,
  type: string,
}

export interface loginButtonProps {
  title: string
}

const LoginForm: React.FC = () => {
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
    </div>
  );
};

const FormHeader = ({ title }: headerProps) => (
  <h2 id="headerTitle">{title}</h2>
);

const Form = () => {
  return (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password" />
      <FormButton title="Log in" />
    </div >
  );
};

const FormButton = ({ title }: loginButtonProps) => {
  return (
    <div id="button" className="row">
      <button>{title}</button>
    </div>
  );
};

const FormInput = ({ description, type, placeholder }: loginInputFieldProps) => {
  return (
    <div className="row">
      <label>{description}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default LoginForm