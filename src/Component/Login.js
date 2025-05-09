import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  console.log("loginInfo ->", loginInfo);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={loginInfo.username}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={loginInfo.password}
          />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="mt-3">
        <p>
          Does't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
