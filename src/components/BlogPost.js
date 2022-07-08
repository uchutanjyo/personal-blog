import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { currentBlogPost, resetBlogPost } = useGlobalContext();

  return (
    <>
    <div className="blogpost-container">
      {currentBlogPost.map((blog) => {
        const {
          id,
          title,
          author,
          date,
          paragraphs,
          image,
          tags,
        } = blog;
        return (
          <div className="blog-post">
            <div className="">
              <h2>{`${title.substring(0, 100)}`.toUpperCase()}</h2>
              <div className="">
                {/* <img src={medImageUrl} alt="description" /> */}
              </div>
            </div>

            <div className="product-details-right-sidebar">
            <h3>Author: {author}</h3>

            <h3> Title: {title}</h3>

              {paragraphs.map((paragraph) => {
                return  <p key={id}>{paragraph}</p>
      })

              }
 <Link to="/" className="Navbar-link" onClick={resetBlogPost
}>
              <button >Back to list</button></Link>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default BlogPost;
