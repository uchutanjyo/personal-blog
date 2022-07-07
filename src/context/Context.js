import React, { useState, useContext, useEffect } from "react";
import blogs from "../blogposts/blogposts.json";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentBlogPostId, setCurrentBlogPostId] = useState(null);
  const [currentBlogPost, setCurrentBlogPost] = useState([]);
  const [isSettingId, setIsSettingId] = useState(false)
  const [isSettingBlogPost, setIsSettingBlogPost] = useState(false)


  
  const setLoadingToTrue = () => {
    setIsLoading(true)
    console.log(isLoading)
  }

  useEffect(() => {
    if (currentBlogPostId !== null) {
      console.log(currentBlogPostId)

        let filteredPost = blogs.posts.filter((blog) => {
           return blog.id == currentBlogPostId
         })
         setCurrentBlogPost(filteredPost)
         console.log(currentBlogPost)
        }
}  , [currentBlogPostId])


  // useEffect(() => {
  //     console.log(currentBlogPost)

  //       setIsLoading(false)
         
  // }, [currentBlogPost])


  
  return (
    <>
      <AppContext.Provider
        value={{
          currentBlogPostId,
          setCurrentBlogPost,
          currentBlogPost,
          setCurrentBlogPostId,
          setIsSettingId,
          setIsSettingBlogPost,
          setLoadingToTrue,
          setIsLoading
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
