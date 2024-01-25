import React from "react";
import reactpic from "../assets/react.jpg";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src={reactpic} alt="" />
      </div>
      <div className="texts">
        <h2>Redux, why?</h2>
        <p className="info">
          <span className="author">Drew Gomez</span>
          <time>2024-01-23 4:42pm</time>
        </p>
        <p className="summary">
          Let's take a second to dive in and decide why or why not we'd be going
          with Redux in our next project. We will talk about pros and cons, and
          also mention some competitors who I've also broken down, links below!
        </p>
      </div>
    </div>
  );
};

export default Post;
