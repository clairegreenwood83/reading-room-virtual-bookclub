import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard"; 

function MyLibrary() {

const [books, setBooks] = useState(JSON.parse(localStorage?.getItem("myLibrary")));
const [currentlyReading, setCurrentlyReading] = useState(JSON.parse(localStorage.getItem("currentlyReading")) || []);
const [previouslyRead, setPreviouslyRead] = useState(JSON.parse(localStorage.getItem("previouslyRead")) || []);

function selectElement() {    
  let element = document.querySelectorAll('#dd');
  element.value = "";
  console.log('def');
}

useEffect(() => {
  const interval = setInterval(() => {
    setBooks(JSON.parse(localStorage.getItem("myLibrary")));
    setCurrentlyReading(JSON.parse(localStorage.getItem("currentlyReading")));
    setPreviouslyRead(JSON.parse(localStorage.getItem("previouslyRead")));
    selectElement();
  }, 500);

  return () => {
    console.log(`clearing interval`);
    clearInterval(interval);
  }
}, []);

return (
    <div className="bg myLib">
        <h1>My Library</h1>
    <Container>
        <Row className="favourites mb-3" style={{ overflowX: "auto" }}>
            <h3>Favourites</h3>
            {books?.map(book => (
                <Col key={book?.id}>
                <BookCard
                  id={book?.id}
                  currStatus={"myLibrary"}
                  title={book?.title}
                  image={book?.imageLinks.thumbnail}
                  author={book?.authors[0]}
                />
                </Col>
            ))}
        </Row>
        <Row className="current mb-3" style={{ overflowX: "auto" }}>
            <h3>Currently Reading</h3>
            {currentlyReading?.map((book) => (
            <Col key={book?.id}>
              <BookCard
                id={book?.id}
                currStatus={"currentlyReading"}
                title={book?.title}
                image={book?.imageLinks.thumbnail}
                author={book?.authors[0]}
              />
            </Col>
           ))}
        </Row>
        <Row className="previous mb-3" style={{ overflowX: "auto" }}>
            <h3>Previously Read</h3>
           {previouslyRead?.map((book) => (
            <Col key={book?.id}>
              <BookCard
                id={book?.id}
                currStatus={"previouslyRead"}
                title={book?.title}
                image={book?.imageLinks.thumbnail}
                author={book?.authors[0]}
              />
            </Col>
          ))}
            </Row>
      </Container>
      </div>
  );
}


export default MyLibrary;
