import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path={"/login"} element={<div>login page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
