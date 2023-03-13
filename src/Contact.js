import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context/Context";
import { Link } from "react-router-dom";

const Contact = () => {
  const { resetBlogPost } = useGlobalContext();
 
  
  return (
    <>
    <div className="blogpost-container">
  
    <div className="about">
  matt.engerer@gmail.com          </div>
      </div>
    </>
  );
};

export default Contact;
