import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";

function MyLibrary() {
const [currentlyReading, setCurrentlyReading] = useState([]);
const [favourites, setFavourites] = useState([]);
const [previouslyRead, setPreviouslyRead] = useState([]);

const addToCurrentlyReading = (book) => {
setCurrentlyReading([...currentlyReading, book]);
};

const addToFavourites = (book) => {
setFavourites([...favourites, book]);
};

const addToPreviouslyRead = (book) => {
setPreviouslyRead([...previouslyRead, book]);
}
return (
    <div>
      <Container className="container">
        <h2>My Bookshelf</h2>
        <Row className="current">
            <h3>Currently Reading</h3>
            {currentlyReading.map((book) => (
                <Col>
                <BookCard book={book} />
                </Col>
            ))}
        </Row>
        <Row className="favourites">
            <h3>Favourites</h3>
            {favourites.map((book) => (
                <Col>
                <BookCard book={book} />
                </Col>
            ))}
        </Row>
        <Row className="previous">
            <h3>Previously Read</h3>
            {previouslyRead.map((book) => (
                <Col>
                <BookCard className="bookCard" book={book} />
                </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

addToCurrentlyReading();
addToFavourites();
addToPreviouslyRead();

export default MyLibrary;
