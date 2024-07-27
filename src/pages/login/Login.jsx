import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import loginBg from "../../assets/images/login-bg.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slice/authSlice";
import { toast } from "react-toastify";
import useGetInputValue from "../../hooks/useGetValue";

const initialState = {
  username: "john32",
  password: "87654321",
};

const Login = () => {
  const [checkPassword, setCheckPassword] = useState(false);
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === "john32" && formData.password === "87654321") {
      dispatch(setToken("face-token"));
      navigate("/admin/create-product");
    } else {
      toast.error("Username and password incorrect");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login__left">
          <div className="login__logo">
            <Link to={"/"}>
              <img src={logo} alt="logo img" />
            </Link>
          </div>

          <img
            className="login__left-img"
            src={loginBg}
            alt="login bg  image"
          />
        </div>
        <form
          onSubmit={handleLogin}
          className="login__form container"
          action=""
        >
          <div className="login__form-box">
            <h2>Sign In</h2>
            <p className="login__form-text">
              Don’t have an accout yet? <Link to={"/register"}>Sign Up</Link>
            </p>
            <input
              className="login__form-input"
              type="text"
              placeholder="Your username or email address"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="login__form__input-box">
              <input
                type={checkPassword ? "text" : "password"}
                placeholder="Password"
                className="login__form__password login__form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {checkPassword ? (
                <IoEyeOffOutline onClick={() => setCheckPassword(false)} />
              ) : (
                <IoEyeOutline onClick={() => setCheckPassword(true)} />
              )}
            </div>
            <div className="login__form-middle">
              <div>
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p>Forgot password?</p>
            </div>
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default memo(Login);
