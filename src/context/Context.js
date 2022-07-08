import React, { useState, useContext, useEffect } from "react";
import blogs from "../blogposts/blogposts.json";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentBlogPostId, setCurrentBlogPostId] = useState(null);
  const [currentBlogPost, setCurrentBlogPost] = useState([]);

  const setLoadingToTrue = () => {
    setIsLoading(true)
    console.log(isLoading)
  }

  const resetBlogPost = () => {
    setCurrentBlogPost([])
    setCurrentBlogPostId(null)
  }

  useEffect(() => {
    if (currentBlogPostId !== null) {
        let filteredPost = blogs.posts.filter((blog) => {
           return blog.id == currentBlogPostId
         })
         setCurrentBlogPost(filteredPost)
        }
}  , [currentBlogPostId])

  return (
    <>
      <AppContext.Provider
        value={{
          currentBlogPostId,
          setCurrentBlogPost,
          currentBlogPost,
          setCurrentBlogPostId,
          setIsLoading,
          resetBlogPost
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
