import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context/Context";
import { Link } from "react-router-dom";

const Contact = () => {
  const { resetBlogPost } = useGlobalContext();
 
  
  return (
    <>
    <div className="blogpost-container">
  
    <div className="about">
   Give me a SHOUT at <p>matt.engerer@aol.com</p> or<p> 416 _________ .</p>
          </div>
      </div>
    </>
  );
};

export default Contact;
