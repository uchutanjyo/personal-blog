import React, {useEffect} from "react";

import BlogPost from "./components/BlogPost";
 
const BlogPostPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  }, []);

  return (
        <BlogPost />
  );
}

export default BlogPostPage;
