
import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogposts/blogposts.json";
import { useNavigate } from "react-router-dom";
import useSetBlogPost from "../hooks/useSetBlogPost";


function BlogPostPreview({ author, title, preview, id }) {
  // console.log (author,title, id)

  const navigate = useNavigate();

  const {handleClick, currentBlogPost, currentBlogPostId, isSettingBlogPost} = useSetBlogPost({ })

  useEffect(() => {
    console.log(currentBlogPost.length === 4)
    if (currentBlogPost.length === 4) {
      navigate(`/${id}/blogpost`);
    }
  }, [isSettingBlogPost]);

  return (
    <li className="blog" key={id}>
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
        {/* <Link to={`/${id}/blogpost`}> */}
        <button className="go-to-post" id={id} onClick={handleClick}>
          Go to post</button>

      </div>
    </li>
  );
} 


export default BlogPostPreview;
