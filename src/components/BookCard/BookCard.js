import React from 'react';

import "./BookCard.css";

function BookCard(props) {

    const { id, image, title, author, averageRating, removeBook, moveBook } = props;

   const handleMovebook = (event) => {
        moveBook(id, event.target.value);
    }

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
                <li className="averageRating">
                  <strong>Average rating:</strong> {averageRating}
                </li>
            </ul>
        </div>
      </div>
      <div className="dropdown">
          <select onChange={handleMovebook}>
                        <option value="">Move to:</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="previouslyRead">Previously Read</option>
                        <option value="favourites">Favourites</option>
                    </select>
      </div>
      <div className="removeBtn">
        <button onClick={() => removeBook(id)} className="remove">Remove</button>
      </div>
  </div>

    );
  }
  
  export default BookCard;