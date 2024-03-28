import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: #fff;
`;

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        alert("Registration success! Please login.");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  return (
    <>
      {success && <Navigate to="/login" />}
      <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterPage;
