import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";
//import BooksAPI from "../../BooksAPI";

function MyLibrary() {


return (
    <div className="bg myLib">
        <h1>My Library</h1>
    <Container>
        <Row className="wantRead mb-3">
        <h3>Want To Read</h3>
                <Col>
                <BookCard
                id={library[0].id}
                title={library[0].title}
                image={library[0].image}
                author={library[0].author}
                averageRating={library[0].averageRating}>
                
                </BookCard>
                </Col>
                <Col>
                <BookCard
                id={library[1].id}
                title={library[1].title}
                image={library[1].image}
                author={library[1].author}
                 averageRating={library[0].averageRating}>
                </BookCard>
                </Col>
                <Col>
                <BookCard
                id={library[2].id}
                title={library[2].title}
                image={library[2].image}
                author={library[2].author}
                 averageRating={library[0].averageRating}>
                </BookCard>
                </Col>
            </Row>
            <Row className="current mb-3">
            <h3>Currently Reading</h3>
            <Col>
            <BookCard
            id={library[2].id}
            title={library[2].title}
            image={library[2].image}
            author={library[2].author}
             averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            <Col>
            <BookCard
            id={library[3].id}
            title={library[3].title}
            image={library[3].image}
            author={library[3].author}
             averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            <Col>
            <BookCard
            id={library[3].id}
            title={library[3].title}
            image={library[3].image}
            author={library[3].author}
             averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            </Row>
            <Row className="previous mb-3">
            <h3>Previously Read</h3>
            <Col>
            <BookCard
            id={library[3].id}
            title={library[3].title}
            image={library[3].image}
            author={library[3].author}
             averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            <Col>
            <BookCard
            id={library[4].id}
            title={library[4].title}
            image={library[4].image}
            author={library[4].author}
            averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            <Col>
            <BookCard
            id={library[0].id}
            title={library[0].title}
            image={library[0].image}
            author={library[0].author}
            averageRating={library[0].averageRating}>
            </BookCard>
            </Col>
            </Row>
      </Container>
      </div>
  );
}


export default MyLibrary;
