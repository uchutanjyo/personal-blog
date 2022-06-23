import React, { useState, useRef, useEffect } from "react";
import blogs from "../blogposts/blogposts.json";
import BlogPostPreview from "./BlogPostPreview";
import useSetBlogPost from "../hooks/useSetBlogPost";



function BlogPost({}) {
  const {handleClick,currentBlogPost, isSettingBlogPost, currentBlogPostId} = useSetBlogPost({ })


  useEffect(() => {
      
    console.log(currentBlogPost)
    console.log(isSettingBlogPost)

}
     , [isSettingBlogPost])


  
  // const productDetails = currentFiltered.filter((product) => {
  //   return singleProductId == product.id;
  // });



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
