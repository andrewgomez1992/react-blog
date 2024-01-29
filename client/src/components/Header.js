import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo(res);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/logout", null, {
        withCredentials: true,
        method: "POST",
      });

      setUserInfo(null);
    } catch (error) {
      console.error(error);
      alert("An error occurred during logout");
    }
  };

  const username = userInfo.data.username;

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
