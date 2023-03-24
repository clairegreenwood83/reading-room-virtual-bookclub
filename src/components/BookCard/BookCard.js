import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./BookCard.css";

function BookCard(props) {

    const { id, image, title, author, removeBook } = props;
   
    const handleRemove = () => {
        removeBook(id);
    }

    return (
            <Card className="book" key={id}>
            <div className="img-container">
            <Card.Img className="image" variant="top" alt="book image" src={image}/>
            </div>
            <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <Card.Subtitle className="author">Author: {author}</Card.Subtitle>
            <Button className="removeButton" variant="danger" onClick={handleRemove}>Remove</Button>
            </Card.Body>
            </Card>
    );
  }
  
  export default BookCard;