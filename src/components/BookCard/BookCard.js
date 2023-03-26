import React from 'react';

import "./BookCard.css";

function BookCard(props) {

    const { id, image, title, author, averageRating, status } = props;
   

    return (
    <div className="card" key={id} status={status}>
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
    );
  }
  
  export default BookCard;