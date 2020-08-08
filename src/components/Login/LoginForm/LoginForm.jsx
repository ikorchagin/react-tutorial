import React from "react";
import { Field } from "redux-form";
import LoginContainer from "../LoginContainer";
import InputControl from "../../common/FormControls/InputControl/InputControl";
import { required, maxLength50 } from "../../../utils/validators/validators";
import style from "./LoginForm.module.css";

export default ({ handleSubmit, goLogin, ...props }) => {
  return (
    <form className={`${style.loginForm} ${props.error && style.error}`} onSubmit={handleSubmit(goLogin)}>
      <div>
        <Field
          type="email"
          name="email"
          placeholder="login"
          validate={[required, maxLength50]}
          component={InputControl}
        />
      </div>
      <div>
        <Field
          type="password"
          name="password"
          validate={[required, maxLength50]}
          placeholder="password"
          component={InputControl}
        />
      </div>
      <div>
        Remember me
        <Field type="checkbox" name="rememberMe" component={InputControl} />
      </div>
      {props.error && <div className={style.errorMessage}>{props.error}</div>}

      <button>Submit</button>
    </form>
  );
};
