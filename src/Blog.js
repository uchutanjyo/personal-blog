import React, { useEffect, useState} from "react";
import BlogList from "./components/BlogList";
import { useGlobalContext } from "./context/Context";



const Blog = () => {

  return (
        <BlogList />
  );
}

export default Blog;
