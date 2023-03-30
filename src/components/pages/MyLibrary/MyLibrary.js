import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyLibrary.css";
import BookCard from "../../BookCard/BookCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyLibrary() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage?.getItem("myLibrary"))
  );
  const [currentlyReading, setCurrentlyReading] = useState(
    JSON.parse(localStorage.getItem("currentlyReading")) || []
  );
  const [previouslyRead, setPreviouslyRead] = useState(
    JSON.parse(localStorage.getItem("previouslyRead")) || []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBooks(JSON.parse(localStorage.getItem("myLibrary")));
      setCurrentlyReading(JSON.parse(localStorage.getItem("currentlyReading")));
      setPreviouslyRead(JSON.parse(localStorage.getItem("previouslyRead")));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg myLib">
      <h1>My Library</h1>
      <Container>
        <Row className="favourites mb-3" style={{ overflowX: "auto" }}>
          <h3>Favourites</h3>
          <Carousel responsive={responsive}>
            {books?.map((book) => (
              <div key={book?.id}>
                <BookCard
                  id={book?.id}
                  currStatus={"myLibrary"}
                  title={book?.title}
                  image={book?.imageLinks.thumbnail}
                  author={book?.authors[0]}
                />
              </div>
            ))}
          </Carousel>
        </Row>
        <Row className="current mb-3" style={{ overflowX: "auto" }}>
          <h3>Currently Reading</h3>
          <Carousel responsive={responsive}>
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
          </Carousel>
        </Row>
        <Row className="previous mb-3" style={{ overflowX: "auto" }}>
          <h3>Previously Read</h3>
          <Carousel responsive={responsive}>
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
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default MyLibrary;
