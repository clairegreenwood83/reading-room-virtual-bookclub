import React from 'react';

import "./BookCard.css";

function BookCard(props) {

    const { id, image, title, author, averageRating } = props;
   

    return (
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
            // <Card className="book" key={id}>
            // <div className="img-container">
            // <Card.Img className="image" variant="top" alt="book image" src={image}/>
            // </div>
            // <Card.Body>
            // <Card.Title className="title">{title}</Card.Title>
            // <Card.Subtitle className="author">Author: {author}</Card.Subtitle>
            // <Button className="removeButton" variant="danger" onClick={handleRemove}>Remove</Button>
            // </Card.Body>
            // </Card>
    );
  }
  
  export default BookCard;