import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";


// react routerd
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import BlogPostPage from "./BlogPostPage";
import { useGlobalContext } from "./context/Context";

const App = () => {

  const {  setCurrentBlogPost, setCurrentBlogPostId } = useGlobalContext();

  const handleClick = () => {
    setCurrentBlogPost([])
    setCurrentBlogPostId(null)
  }

  return (
    <>
      <BrowserRouter>
        <div className="Navandtitle">
          <nav className="Nav">
            <Link to="/" className="Navbar-link" onClick={handleClick
}>
              Blog
            </Link>
            <Link to="/About" className="Navbar-link">
              About
            </Link>
           
            <Link to="/Contact" className="Navbar-link">
              Contact
            </Link>
          </nav>
        </div>
       
        <Routes>
          <Route path="/" element={<Blog />}></Route>
          <Route path="about/" element={<About />}></Route>

          <Route path="contact/" element={<Contact />}></Route>
          {/* <Route path="contact/" element={<BlogPostPage />}></Route> */}

          <Route
            path=":blogId/blogpost"
            element={<BlogPostPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
