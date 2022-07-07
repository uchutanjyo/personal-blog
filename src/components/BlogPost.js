import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";

const BlogPost = () => {
  const { currentBlogPost } = useGlobalContext();

  return (
    <>
      {currentBlogPost.map((blog) => {
        const {
          id,
          title,
          author,
          date,
          fullText,
          image,
          tags,
        } = blog;
        return (
          <div className="">
            <div className="">
              <h2>{`${title.substring(0, 100)}`.toUpperCase()}</h2>
              <div className="">
                {/* <img src={medImageUrl} alt="description" /> */}
              </div>
            </div>

            <div className="product-details-right-sidebar">
            <h2>Author: {author}</h2>

              <h2>Title: {title}</h2>

              <p>{fullText}</p>

              <button >Back to list</button>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
};

export default BlogPost;
