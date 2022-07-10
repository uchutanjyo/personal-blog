import React, { useEffect, useState} from "react";
import BlogList from "./components/BlogList";
import { useGlobalContext } from "./context/Context";



const Blog = () => {

  return (
  <>
      <div className="wrapper">

    <div className="top-header-wrapper">
    <div className="top-header-1">Matt's
    <div className="top-header-2">blog</div>
    <div className="top-header-3">(only about software/web development--nothing personal, no pics of me)</div></div>
    </div>
        <BlogList />
        </div>

        </>
  );

  
}


export default Blog;
