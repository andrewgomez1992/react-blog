import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      //   [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      [({ color: [] }, { background: [] })],

      ["clean"], // remove formatting button
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <form>
      <input type="title" placeholder="Title" />
      <input type="summary" placeholder="Summary" />
      <input type="file" />
      <ReactQuill value={content} modules={modules} formats={formats} />
      <button style={{ marginTop: "5px" }}></button>
    </form>
  );
};

export default CreatePost;
