import React, { useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

const Homepage = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/post");
      const data = response.data;
      console.log("Data from the API:", data);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Homepage;
