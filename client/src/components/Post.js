import React from "react";
import formatDate from "../helperFunctions/formatDate";
import { Link } from "react-router-dom";

const Post = ({ id, title, summary, coverImage, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          <img src={"http://localhost:4000/" + coverImage} alt="Main Pic" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <span className="author">{author}</span>
          <time>{formatDate(createdAt)}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
