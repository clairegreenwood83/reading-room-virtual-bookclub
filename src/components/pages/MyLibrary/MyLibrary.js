import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import { useState } from "react";
import library from "../../library.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function MyLibrary() {

//const library = JSON.parse(localStorage.getItem('myLibrary')) | [];
//console.log(library);

const [books, setBooks] = useState(library);
console.log(books);

 const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(books);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBooks(items);
  };

return (
    <div className="bg myLib">
        <h1>My Library</h1>

    <DragDropContext onDragEnd={handleOnDragEnd}>
         <Droppable droppableId="bookcards">
            {(provided) => (
            <div
            className='flex-center'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
         <Container>
        <Row className="wantRead mb-3">
        <h3>Want To Read</h3>
        {books.filter((book) => book.status === "wantRead").map((book, index) => (
                <Draggable key={book.id} draggableId={book.id.toString()} index={index}>
                {(provided) => (
                <Col
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
                draggableId={book.id}
                index={index}>
                </BookCard>
                </Col>
                )}
                </Draggable>
                ))}
            </Row>
            <Row className="current mb-3">
            <h3>Currently Reading</h3>
            {books.filter((book) => book.status === "reading").map((book, index) => (
            <Draggable key={book.id} draggableId={book.id.toString()} index={index}>
            {(provided) => (
                <Col
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
                draggableId={book.id}
                index={index}
                >
                </BookCard>
                </Col>
             )}
            </Draggable>
            ))}
            </Row>
            <Row className="previous mb-3">
            <h3>Previously Read</h3>
             {books.filter((book) => book.status === "previous").map((book, index) => (
                    <Draggable key={book.id} draggableId={book.id.toString()} index={index}>
                      {(provided) => (
                <Col
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                            >
                <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.image}
                author={book.author}
                averageRating={book.averageRating}
                draggableId={book.id}
                index={index}>
                </BookCard>
                </Col>
            )}
            </Draggable>
            ))}
            </Row>
      </Container>
               
            

          {provided.placeholder}
         </div>
        )}
      </Droppable>
      </DragDropContext>
      </div>
  );
}


export default MyLibrary;
