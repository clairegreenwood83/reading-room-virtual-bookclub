import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";
import { useState } from 'react';

function MyLibrary() {

//const library = JSON.parse(localStorage.getItem('myLibrary')) | [];
//console.log(library);

const [books, setBooks] = useState(library);
const [currentlyReading, setCurrentlyReading] = useState([]);
const [previouslyRead, setPreviouslyRead] = useState([]);

const removeBook = (id) => {
    const newBookList = books.filter((library) => library.id !== id);
    setBooks(newBookList);
    setCurrentlyReading(currentlyReading.filter((book) => book.id !== id));
    setPreviouslyRead(previouslyRead.filter((book) => book.id !== id));
    };

    const moveBook = (id, destination) => {
        const book = books.find((book) => book.id === id);
        const newBookList = books.filter((book) => book.id !== id);
        if (destination === "currentlyReading") {
            setCurrentlyReading([...currentlyReading, book]);
        } else if (destination === "previouslyRead") {
            setPreviouslyRead([...previouslyRead, book]);
    }
    setBooks(newBookList);
  };

return (
    <div className="bg myLib">
        <h1>My Library</h1>
    <Container>
        <Row className="favourites mb-3">
            <h3>Favourites</h3>
            {books.map(book => (
                <Col key={book.id}>
                <BookCard
                moveBook={moveBook}
                removeBook={removeBook}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}>
                </BookCard>
                </Col>
            ))}
        </Row>
        <Row className="current mb-3">
            <h3>Currently Reading</h3>
            {currentlyReading.map((book) => (
            <Col key={book.id}>
              <BookCard
                removeBook={removeBook}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
                moveBook={moveBook}
              />
            </Col>
           ))}
        </Row>
        <Row className="previous mb-3">
            <h3>Previously Read</h3>
           {previouslyRead.map((book) => (
            <Col key={book.id}>
              <BookCard
                removeBook={removeBook}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
                moveBook={moveBook}
              />
            </Col>
          ))}
            </Row>
      </Container>
      </div>
  );
}


export default MyLibrary;
