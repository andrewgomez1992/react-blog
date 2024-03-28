import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { UserContext } from "../UserContext";
import wolflogo from "../assets/wolflogo.png";

const Username = styled.a`
  color: red;
`;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:4000/profile", {
          withCredentials: true,
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  function logout() {
    axios
      .post("http://localhost:4000/logout", null, {
        withCredentials: true,
      })
      .then(() => {
        setUserInfo(null);
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }

  const username = userInfo?.username;

  // console.log("userInfo", userInfo);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="nav">
      <div className="logoandwolf">
        <Link to="/" className="logo">
          The Wolf
          <img src={wolflogo} alt="wolf" />
        </Link>
      </div>
      <nav>
        {username ? (
          <>
            <Link className="navtext" to="/create">
              Create new post
            </Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="navtext" onClick={logout}>
              Logout (<Username>{username}</Username>)
            </a>
          </>
        ) : (
          <>
            <Link className="navtext" to="/login">
              Login
            </Link>
            <Link className="navtext" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
