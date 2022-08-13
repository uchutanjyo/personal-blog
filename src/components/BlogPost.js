import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";
import Error from "./Error";

const BlogPost = () => {
  const { currentBlogPost, resetBlogPost } = useGlobalContext();
  if (currentBlogPost.length === 0) {
    return <Error></Error>;
  }
  return (
    <>
      <div className="blogpost-container">
        {currentBlogPost.map((blog) => {
          const { id, title, author, date, paragraphs, image, tags } = blog;
          if (paragraphs === undefined) return <Error />;
          return (
            <div className="blog-post">
              <div>
                <h2>{`${title.substring(0, 100)}`.toUpperCase()}</h2>
                <div className="">{/* <img src={} alt="description" /> */}</div>
              </div>
              <div className="product-details-right-sidebar">
                <h3><u>Author</u>: {author}</h3>
                <h3><u>Date:</u> {date}</h3>
                <h3> <u>Tags:</u> {tags}</h3>

                {paragraphs.map((paragraph) => {
                  if (paragraph[0].includes(".png")) {
                    const screenshot = `${paragraph[0]}`;
                    return (
                      <a
                        href={`https://github.com/uchutanjyo/personal-blog/blob/main/src/blogimages/${screenshot}?raw=true`}
                        target="_blank"
                      >
                        <img
                          src={require(`../blogimages/${screenshot}`)}
                          style={{ height: "auto" }}
                        />
                      </a>
                    );
                  }
                  return (
                    <p
                      key={id}
                      style={{
                        display: "flex",
                        paddingTop: ".7em",
                        lineHeight: "1.3em",
                      }}
                    >
                      {paragraph}
                    </p>
                  );
                })}
                <Link to="/" className="Navbar-link" onClick={resetBlogPost}>
                  <button>Back to list</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPost;
