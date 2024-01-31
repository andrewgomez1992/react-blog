import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

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

  console.log("userInfo", userInfo);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="nav">
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        ) : (
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
