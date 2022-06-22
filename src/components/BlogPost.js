
import React from "react";

function BlogPost({ author, title, preview }) {
  return (
    <li className="blog">
      <div className="blogpost">
        <div className="image-container">
          {/* <img
            className="authorImage"
            src={`https://joeschmoe.io/api/v1/${author}`}
            alt="Author"
          /> */}
          <p variant="body">{author}</p>
        </div>

        <h2>{title}</h2>
        <p className="blog-preview">{preview}</p>
        <button className="go-to-post">Go to post</button>
      </div>
    </li>
  );
}


export default BlogPost;
