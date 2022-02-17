import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("taha.seddik1992@gmail.com");
  const [password, setPassword] = useState("Tahaseddik1992$");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Login man</h3>
      <div>
        <span>Email :</span>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <span>Password :</span>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={submit} type="submit">
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
