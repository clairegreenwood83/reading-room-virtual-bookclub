import React from "react";
import './style.css';

function Comment(props) {
    return (
      <div className="postcard-text">
        <h2>{props.name}</h2>
        <p>{props.text}</p> 
      </div>
    );
  }
  
  export default Comment;