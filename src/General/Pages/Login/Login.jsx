import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [pasw, setPasw] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      (user === "shahlar" && pasw === "1") ||
      (user === "admin" && pasw === "2") ||
      (user === "superadmin" && pasw === "3")
    ) {
      navigate("/home");
      localStorage.setItem(
        "localUser",
        JSON.stringify({ userName: user, userPasw: pasw })
      );
    } else {
      alert("Wrong password");
      navigate("/login");
    }
  };

  return (
    <div className="login-div">
      <h1>Login</h1>

      <input
        onChange={(e) => setUser(e.target.value)}
        className="login-name"
        type="text"
      />
      <input
        onChange={(e) => setPasw(e.target.value)}
        className="login-psw"
        type="text"
      />
      <button onClick={() => handleLogin()} className="login-btn" type="submit">
        Log in
      </button>
    </div>
  );
};

export default Login;
