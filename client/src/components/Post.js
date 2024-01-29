import React, { useContext } from "react";
import formatDate from "../helperFunctions/formatDate";
import { UserContext } from "../UserContext";

const Post = ({ title, summary, coverImage, createdAt }) => {
  const imageUrl = `http://localhost:4000/api/${coverImage}`;
  const { userInfo } = useContext(UserContext);

  console.log("user", userInfo);

  return (
    <div className="post">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <span className="author">{userInfo?.data?.username}</span>
          <time>{formatDate(createdAt)}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
