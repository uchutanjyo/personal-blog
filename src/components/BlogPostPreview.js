
import React, {useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";


 const BlogPostPreview = ({ author, date, title, preview, id }) => {

  const { setLoadingToTrue, isLoading, setIsLoading, currentBlogPost, setCurrentBlogPost, currentBlogPostId, setCurrentBlogPostId, isSettingBlogPost, setIsSettingBlogPost, setIsSettingId, isSettingId } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
      setCurrentBlogPostId(e.target.id)
        }

        useEffect(() => {
          if(currentBlogPost.length === 1 && !isLoading) {
            navigate(`/${currentBlogPost[0].id}/blogpost`);
          }
        }, [currentBlogPost]);
        
  return (
    
    <li className={!title.includes('Placeholder') ? "blog" :"placeholder"} key={id}>
      <div >
        <div className="image-container">
          {/* <img
            src={``}
          /> */}
          <p>By <i>{author}</i></p>
        </div>

        <h2 className={!title.includes('*NEW*') ? "" :"new"}>{title}</h2>
        <h3>Date: {date}</h3>
        <p className="blog-preview">Preview: {preview}...</p>
      
        <button className="go-to-post" id={id} onClick={handleClick}>
          Go to post</button>
     
      </div>
    </li>
  );
} 


export default BlogPostPreview;
