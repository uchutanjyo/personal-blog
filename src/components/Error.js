import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";


const Error = () => {
    const { resetBlogPost } = useGlobalContext();

    return (
    <div className="blogpost-container">
    <div className="blog-post">
      <h3>Error! Error! Error!</h3> 
      <p>You either refreshed where localStorage doesn't yet exist, or...</p>
      <p>...this blog post hasn't been created yet.</p>

      <p>Please return to the homepage. Thanks.</p>
      <Link to="/" onClick={resetBlogPost
}>
  <button className="back">Back to homepage</button></Link>
    </div>
</div>
    )
}

export default Error;