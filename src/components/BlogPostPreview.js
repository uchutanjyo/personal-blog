
import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogposts/blogposts.json";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";



function BlogPostPreview({ author, title, preview, id }) {

  const { setLoadingToTrue, isLoading, setIsLoading, currentBlogPost, setCurrentBlogPost, currentBlogPostId, setCurrentBlogPostId, isSettingBlogPost, setIsSettingBlogPost, setIsSettingId, isSettingId } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
      setCurrentBlogPostId(e.target.id)
      console.log(currentBlogPostId)

        }

        useEffect(() => {
          if(currentBlogPost.length === 4 && !isLoading) {
            console.log(currentBlogPost.length)
            navigate(`/${currentBlogPost[0].id}/blogpost`);
          }
        }, [currentBlogPost]);


    



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
        
        {/* <Link to={`/${currentBlogPostId}/blogpost`}> */}
        <button className="go-to-post" id={id} onClick={handleClick}>
          Go to post</button>
          {/* </Link> */}
      </div>
    </li>
  );
} 


export default BlogPostPreview;
