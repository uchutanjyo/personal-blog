
import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogposts/blogposts.json";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";


 const BlogPostPreview = ({ author, title, preview, id }) => {

  const { setLoadingToTrue, isLoading, setIsLoading, currentBlogPost, setCurrentBlogPost, currentBlogPostId, setCurrentBlogPostId, isSettingBlogPost, setIsSettingBlogPost, setIsSettingId, isSettingId } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
      setCurrentBlogPostId(e.target.id)
        }

        useEffect(() => {
          if(currentBlogPost.length === 1 && !isLoading) {
            console.log(currentBlogPost.length)
            navigate(`/${currentBlogPost[0].id}/blogpost`);
          }
        }, [currentBlogPost]);

  return (
    <li className="blog" key={id}>
      <div className="blogpost">
        <div className="image-container">
          {/* <img
            src={``}
          /> */}
          <p>By <i>{author}</i></p>
        </div>

        <h2>{title}</h2>
        <p className="blog-preview">Preview: {preview}</p>
      
        <button className="go-to-post" id={id} onClick={handleClick}>
          Go to post</button>
     
      </div>
    </li>
  );
} 


export default BlogPostPreview;
