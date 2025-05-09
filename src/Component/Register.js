import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyRegisterInfo = { ...registerInfo };
    copyRegisterInfo[name] = value;
    setRegisterInfo(copyRegisterInfo);
  };
  const handleReg = (e) => {
    alert("Register Successfully.");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  console.log("registerInfo ->", registerInfo);
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
            value={registerInfo.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={registerInfo.email}
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
            value={registerInfo.password}
          />
        </div>
        <button onClick={handleReg} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div className="mt-3">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
