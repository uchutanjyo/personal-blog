import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context/Context";
import { Link } from "react-router-dom";

const About = () => {
  const { resetBlogPost } = useGlobalContext();
 
  
  return (
    <>
    <div className="blogpost-container">
  
          <div className="about">
       <p> Hi! My name is Matt and I'm a software developer on the hunt for my first full time position. :)</p>
       <p>I have an existing blog on Blogger.com, but after completing a React work simulation on the awesome platform <a href="https://www.hatchways.io/">Hatchways.io</a> which involved implementing a pagination feature, I knew I had to rework the project into my own personal blog application.</p> 
       <p>It's still very much under construction and the code will be heavily refactored in the end, but the skeleton is ready. </p>
       <p>Hopefully, this blog will at some point help another developer who's in the same boat as I am!</p>
          </div>
      </div>
    </>
  );
};

export default About;
