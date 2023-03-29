import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard"; 

function MyLibrary() {

//const library = JSON.parse(localStorage.getItem('myLibrary')) | [];
//console.log(library);

const [books, setBooks] = useState(JSON.parse(localStorage.getItem("myLibrary")));
const [currentlyReading, setCurrentlyReading] = useState(JSON.parse(localStorage.getItem("currentlyReading")) || []);
const [previouslyRead, setPreviouslyRead] = useState(JSON.parse(localStorage.getItem("previouslyRead")) || []);

useEffect(() => {
  localStorage.setItem("myLibrary", JSON.stringify(books));
  localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));
  localStorage.setItem("previouslyRead", JSON.stringify(previouslyRead));
}, [books, currentlyReading, previouslyRead]);


const removeBook = (id) => {
    const newBookList = books.filter((library) => library.id !== id);
    setBooks(newBookList);
    setCurrentlyReading(currentlyReading.filter((book) => book.id !== id));
    setPreviouslyRead(previouslyRead.filter((book) => book.id !== id));
    localStorage.setItem("myLibrary", JSON.stringify(newBookList));
    localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));
    localStorage.setItem("previouslyRead", JSON.stringify(previouslyRead));
    };

const moveBook = (id, destination) => {
        const book = books.find((book) => book.id === id);
        const newBookList = books.filter((book) => book.id !== id);

        const removeFromRow = (row) =>
          row.filter((book) => book.id !== id);
        
        let updatedCurrentlyReading = [...currentlyReading];
        let updatedPreviouslyRead = [...previouslyRead];

          if (destination === "currentlyReading") {
            setCurrentlyReading([...currentlyReading, book]);
            updatedPreviouslyRead = removeFromRow(previouslyRead);
            setPreviouslyRead(updatedPreviouslyRead);
            localStorage.setItem("currentlyReading", JSON.stringify([...currentlyReading, book]));
            localStorage.setItem("previouslyRead", JSON.stringify(updatedPreviouslyRead));
        } else if (destination === "previouslyRead") {
            setPreviouslyRead([...previouslyRead, book]);
            updatedCurrentlyReading = removeFromRow(currentlyReading);
            setCurrentlyReading(updatedCurrentlyReading);
            localStorage.setItem("previouslyRead", JSON.stringify([...previouslyRead, book]));
            localStorage.setItem("currentlyReading", JSON.stringify(updatedCurrentlyReading));
        } else if (destination === "favourites") {
          const newCurrentlyReading = currentlyReading.filter((book) => book.id !== id);
          const newPreviouslyRead = previouslyRead.filter((book) => book.id !== id);  
            setCurrentlyReading(updatedCurrentlyReading);
            setPreviouslyRead(updatedPreviouslyRead);
            setBooks([...books, book]); // add book back to favourites row
            localStorage.setItem("myLibrary", JSON.stringify([...books, book])); // update localStorage for myLibrary
            localStorage.setItem("currentlyReading", JSON.stringify(newCurrentlyReading));
            localStorage.setItem("previouslyRead", JSON.stringify(newPreviouslyRead));
          }
        setBooks(newBookList);
        // save updated arrays to local storage

        localStorage.setItem("myLibrary", JSON.stringify(newBookList));

    };


return (
    <div className="bg myLib">
        <h1>My Library</h1>
    <Container>
        <Row className="favourites mb-3" style={{ overflowX: "auto" }}>
            <h3>Favourites</h3>
            {books.map(book => (
                <Col key={book.id}>
                <BookCard
                moveBook={moveBook}
                removeBook={removeBook}
                id={book.id}
                title={book.title}
                image={book.imageLinks.thumbnail}
                author={book.authors[0]}
                averageRating={book.averageRating}>
                </BookCard>
                </Col>
            ))}
        </Row>
        <Row className="current mb-3" style={{ overflowX: "auto" }}>
            <h3>Currently Reading</h3>
            {currentlyReading.map((book) => (
            <Col key={book.id}>
              <BookCard
                removeBook={removeBook}
                moveBook={moveBook}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
              />
            </Col>
           ))}
        </Row>
        <Row className="previous mb-3" style={{ overflowX: "auto" }}>
            <h3>Previously Read</h3>
           {previouslyRead.map((book) => (
            <Col key={book.id}>
              <BookCard
                removeBook={removeBook}
                moveBook={moveBook}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
              />
            </Col>
          ))}
            </Row>
      </Container>
      </div>
  );
}


export default MyLibrary;
