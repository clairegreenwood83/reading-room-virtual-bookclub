import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function MyLibrary() {

//const library = JSON.parse(localStorage.getItem('myLibrary')) | [];
//console.log(library);

  const [books, setBooks] = useState(library);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [previouslyRead, setPreviouslyRead] = useState([]);

  const moveBook = (bookId, fromList, toList) => {
    const book = books.find((book) => book.id === bookId);
    const updatedFromList = fromList.filter((item) => item.id !== bookId);
    const updatedToList = [...toList, book];
    setBooks([...updatedFromList, ...updatedToList]);
    if (toList === currentlyReading) {
      setCurrentlyReading(updatedToList);
    } else {
      setPreviouslyRead(updatedToList);
    }
  };

  const removeBook = (bookId, list) => {
    const updatedList = list.filter((book) => book.id !== bookId);
    if (list === currentlyReading) {
      setCurrentlyReading(updatedList);
    } else {
      setPreviouslyRead(updatedList);
    }
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    const sourceList =
      source.droppableId === "books"
        ? books
        : source.droppableId === "currentlyReading"
        ? currentlyReading
        : previouslyRead;
    const destinationList =
      destination.droppableId === "books"
        ? books
        : destination.droppableId === "currentlyReading"
        ? currentlyReading
        : previouslyRead;
    const book = sourceList.find((book) => book.id === result.draggableId);
    moveBook(book.id, sourceList, destinationList);
  };

  return (
    <div className="bg myLib">
      <h1>My Library</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <Droppable droppableId="books">
            {(provided) => (
              <Row
                className="favourites mb-3"
                style={{ overflowX: "auto" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>Favourites</h3>
                {books.map((book)=> (
                   <Col>
                       <BookCard 
                       moveBook={moveBook}
                       removeBook={removeBook}
                       id={book.id}
                       title={book.title}
                       image={book.image}
                       author={book.author}
                       averageRating={book.averageRating}
                       />
                       </Col>
                 
               ))}
              </Row>
               )}
                      </Droppable>
                      <Droppable droppableId="currentlyReading">
                      {(provided) => (
                      <Row
                      className="current mb-3"
                      style={{ overflowX: "auto" }}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      >
                      <h3>Currently Reading</h3>
                      {currentlyReading.map((book, index) => (
                      <Draggable key={book.id} draggableId={book.id} index={index}>
                      {(provided) => (
                      <Col
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      >
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
                        )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                        </Row>
                        )}
                        </Droppable>
                        <Droppable droppableId="previouslyRead">
                        {(provided) => (
                        <Row
                        className="previous mb-3"
                        style={{ overflowX: "auto" }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                        <h3>Previously Read</h3>
                        {previouslyRead.map((book, index) => (
                        <Draggable key={book.id} draggableId={book.id} index={index}>
                        {(provided) => (
                        <Col
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
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
                        )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                        </Row>
                        )}
                        </Droppable>
                        </Container>
                        </DragDropContext>
                        </div>
                        );
                        }

export default MyLibrary;








