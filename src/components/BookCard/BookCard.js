import React from 'react';
import "./BookCard.css";

function BookCard(props) { 

  if (!props) {
    return;
  }

  const { id, currStatus, image, title, author } = props;

  const handleMovebook = (event) => {
    let destin =  event.target.value;

    if (destin === currStatus) {
      console.log("Already in category!");
      return;
    }

    let obooks =  JSON.parse(localStorage.getItem(currStatus));
    let nbooks =  JSON.parse(localStorage.getItem(destin));

    if (!nbooks ) {
      nbooks = [];
    } else if (!obooks) {
      obooks = []; 
    }

    const movingB = obooks.find((book) => book?.title === title);
    const newoBookList = obooks.filter((book) => book?.title !== title);

    localStorage.setItem(currStatus, JSON.stringify(newoBookList));
    localStorage.setItem(destin, JSON.stringify([...nbooks, movingB]));
  }

  const removeBook = () => {
    let books =  JSON.parse(localStorage.getItem(currStatus));
    const newBookList = books.filter((book) => book?.title !== title); 
    localStorage.setItem(currStatus, JSON.stringify(newBookList));
  };

    return (
  <div>
    <div className="card" key={id}>
       <div className="img-container">
           <img alt="book cover" src={image} />
       </div>
       <div className="content">
            <ul>
                <li className="title">
                  <strong>Title:</strong> {title}
                </li>
                <li className="author">
                  <strong>Author:</strong> {author}
                </li>
            </ul>
        </div>
      </div>
      <div className="dropdown">
          <select onChange={handleMovebook}>
                        <option value="">Move to:</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="previouslyRead">Previously Read</option>
                        <option value="myLibrary">Favourites</option>
                    </select>
      </div>
      <div className="removeBtn">
        <button onClick={removeBook} className="remove">Remove</button>
      </div>
  </div>

    );
  }
  
  export default BookCard;