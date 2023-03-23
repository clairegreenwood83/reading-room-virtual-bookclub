import React from 'react';
import { Card, Col} from 'react-bootstrap';
import "./BookCard.css";

function BookCard(props) {

    const { id, coverImage, title, author } = props;
   

    return (
        <Col md={4} lg={3} className="my-3" key={id}>
            <Card key={id} style={{ minWidth: '20rem', margin: '20px'}}>
            <Card.Img variant="top" alt="book image" src={coverImage}  style={{width: "100%", maxHeight: "40vh"}} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            </Card.Body>
            </Card>
        </Col>
    );
  }
  
  export default BookCard;