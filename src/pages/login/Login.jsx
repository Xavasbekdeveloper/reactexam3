import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import loginBg from "../../assets/images/login-bg.png";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login__left">
          <Link className="login__logo" to={"/"}>
            <img src={logo} alt="logo img" />
          </Link>

          <div className="login__img">
            <img src={loginBg} alt="login bg  image" />
          </div>
        </div>
        <form className="login__form" action="">
          <h2>Sign In</h2>
          <p>
            Don’t have an accout yet? <Link to={"/register"}>Sign Up</Link>
          </p>
          <input type="text" placeholder="Your username or email address" />
          <input type="password" placeholder="Password" />
          <div className="login__form-middle">
            <div>
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Forgot password?</p>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </>
  );
};

export default memo(Login);
