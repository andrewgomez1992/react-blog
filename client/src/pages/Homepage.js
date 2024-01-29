import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/post");
      const data = response.data;
      setPosts(data);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts
          .slice()
          .reverse()
          .map((post) => (
            <Post
              key={post._id}
              title={post.title}
              content={post.content}
              coverImage={post.coverImage}
              createdAt={post.createdAt}
              summary={post.summary}
            />
          ))}
    </>
  );
};

export default Homepage;
