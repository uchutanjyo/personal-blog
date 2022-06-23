import React, { useState, useEffect } from "react";
import blogs from "../blogposts/blogposts.json";

function useSetBlogPost({isSettingBlogPost2}) {
  
    const [currentBlogPostId, setCurrentBlogPostId] = useState(null);
    const [currentBlogPost, setCurrentBlogPost] = useState([]);

    const [isSettingId, setIsSettingId] = useState(false)
    const [isSettingBlogPost, setIsSettingBlogPost] = useState(false)

    const handleClick = (e) => {
        setCurrentBlogPostId(e.target.id)
        setIsSettingId(true)  
    
        console.log(e.target.id, currentBlogPostId, isSettingId)
          }


          useEffect(() => {
            setCurrentBlogPostId(currentBlogPostId)
            console.log( isSettingId)

    setIsSettingId(false)       
}
          , [isSettingId])




          useEffect(() => {
            if (currentBlogPostId != null) {
        
           let filteredPost = blogs.posts.filter((blog) => {
                console.log(blog.id, currentBlogPostId)

              return blog.id == currentBlogPostId
            })
            console.log(filteredPost)
        
        console.log(filteredPost)

            setCurrentBlogPost(filteredPost)
            setIsSettingId(true)       

        }
          }, [currentBlogPostId])

          

          useEffect(() => {
      if(isSettingId) {
         console.log(currentBlogPost)

    setIsSettingId(false)   
    setIsSettingBlogPost(true)    
}}
          , [isSettingId])



    return {
        currentBlogPostId,
        currentBlogPost,
        handleClick,
        isSettingBlogPost
      };
    }
    
    export default useSetBlogPost;
    