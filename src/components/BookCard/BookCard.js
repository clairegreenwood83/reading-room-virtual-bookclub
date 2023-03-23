import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./BookCard.css";

function BookCard(props) {

    const { id, coverImage, title, author, removeBook } = props;
   
    const handleRemove = () => {
        removeBook(id);
    }

    return (
            <Card className="book" key={id}>
            <Card.Img variant="top" alt="book image" src={coverImage}  style={{width: "100%", maxHeight: "25vh"}} />
            <Card.Body>
            <Card.Title>{title}Title</Card.Title>
            <Card.Subtitle>{author}Author</Card.Subtitle>
            <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </Card.Body>
            </Card>
    );
  }
  
  export default BookCard;