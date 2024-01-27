import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/profile", {
      withCredentials: true,
    });
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
