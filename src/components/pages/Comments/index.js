import React, { useEffect, useState } from "react"; 
import Comment from "../../../components/Comment";
import axios from "axios";
import "./style.css";
// import { v4 as uuidv4 } from 'uuid';

const Comments = (props) => {
  const [bookid, setBookid] = useState();
  const [comments, setComments] = useState();
  const [text, setText]  = useState("");
  const [user, setUser]  = useState("");

  useEffect(() => { 
    // setBookid(props.id);
    setBookid("1"); 

    const getComments = async () => { 
      try { 
        // const res = await axios.get("http://localhost:3004/comments", {params: { bookid: props.id}});
        const res = await axios.get("http://localhost:3004/comments");
        setComments(res.data);
      } catch (err) {
        console.log(err); 
      }
    };

    getComments();
  }, []);

  // const sortComments = () => {
  //   let data = [];
  //   for (let i = 0; i < comments?.length; i++) {
  //     if (comments[i].bookid === bookid) {
  //       console.log(comments[i])
  //       data.push(comments[i]);
  //     }
  //   } 
  //   setComments(data);
  // }

  const enableCommentButton = () => { 
    return ((text ? false : true) || (user ? false : true));
  }

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleName = (e) => {
    setUser(e.target.value);
  }

  const addComment = () => { 
    // let token = uuidv4(); 
    var newData = JSON.stringify({"id": comments.length + 1,
      "user": user,
      "text": text,
      "bookid": bookid});

    axios.post("http://localhost:3004/comments", newData, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });
  }  

  return (
    <div className="comments">
      <div className="trow">
        <div className="col-12">
          <div className="comment"> 
            {comments?.map(comment => 
              <Comment
                id={comment.id}
                key={comment.id}
                name={comment.user}
                text={comment.text}
              />)}    
          </div> 
        </div> 
      </div> 
      <div className="trow">
        <div className="col-12">
          <textarea type="text" className="input" placeholder="Write a comment" onChange={handleText} />  
          <div className="col-3">
            <textarea className="input" id="username" placeholder="Write your name" onChange={handleName} />   
          </div> 
        </div>  
      </div> 
      <button className="primaryContained" type="submit" disabled={enableCommentButton()} onClick={addComment} >Add Comment</button>
    </div> 
  );
}

export default Comments;