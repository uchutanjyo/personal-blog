import React, { useEffect } from "react";
import BlogList from "./components/BlogList";
import { useGlobalContext } from "./context/Context";

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  }, []);

  return (
  <>
      <div className="wrapper">

    <div className="top-header-wrapper">
    <div className="top-header-1">Matt's
    <div className="top-header-2">blog</div>
    <div className="top-header-3">[ software/web development ]</div></div>
    </div>
        <BlogList />
        </div>

        </>
  );

  
}


export default Blog;
