import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyLibrary.css";
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";

function MyLibrary() {
  const [books, setBooks] = useState(library);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [previouslyRead, setPreviouslyRead] = useState([]);

  // retrieving from local storage
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    } else {
      setBooks(library);
    }
     const storedCurrentlyReading = JSON.parse(localStorage.getItem("currentlyReading"));
    if (storedCurrentlyReading) {
      setCurrentlyReading(storedCurrentlyReading);
    }

    const storedPreviouslyRead = JSON.parse(localStorage.getItem("previouslyRead"));
    if (storedPreviouslyRead) {
      setPreviouslyRead(storedPreviouslyRead);
    }
  }, []);

// saving to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

    useEffect(() => {
    localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));
  }, [currentlyReading]);

  useEffect(() => {
    localStorage.setItem("previouslyRead", JSON.stringify(previouslyRead));
  }, [previouslyRead]);

  // function for removing a book
  const removeBook = (bookId, list) => {
    const updatedList = list.filter((book) => book.id !== bookId);
    if (list === currentlyReading) {
      setCurrentlyReading(updatedList);
    } else {
      setPreviouslyRead(updatedList);
    }
    setBooks(books.filter((book) => book.id !== bookId));
  };

  // function that runs when an item is dragged
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const sourceDroppableId = result.source.droppableId;
    const destinationDroppableId = result.destination.droppableId;
    const movedBook = books[result.source.index];
    //console.log(movedBook);

    // If the book is moved within the same row
    if (sourceDroppableId === destinationDroppableId) {
      const updatedList = books.filter((index) => {
        return index !== result.source.index;
      });
      updatedList.splice(result.destination.index, 0, movedBook);
      setBooks(updatedList);

      if (destinationDroppableId === "currentlyReading") {
        setCurrentlyReading(updatedList);

      } else if (destinationDroppableId === "previouslyRead") {
        setPreviouslyRead(updatedList);
        
      }
    } else { // If the book is moved between rows
      let updatedSourceList = [];
      let updatedDestinationList = [];

      // Remove the book from the source list
      if (sourceDroppableId === "books") {
        updatedSourceList = books.filter((book, index) => {
          return index !== result.source.index;
        });
        setBooks(updatedSourceList);
      } else if (sourceDroppableId === "currentlyReading") {
        updatedSourceList = currentlyReading.slice();
        updatedSourceList.splice(result.source.index, 1);
        setCurrentlyReading(updatedSourceList);
      } else if (sourceDroppableId === "previouslyRead") {
        updatedSourceList = previouslyRead.slice();
        updatedSourceList.splice(result.source.index, 1);
        setPreviouslyRead(updatedSourceList);
      }

      // Add the book to the destination list
      if (destinationDroppableId === "currentlyReading") {
        updatedDestinationList = [...currentlyReading, movedBook];
        setCurrentlyReading(updatedDestinationList);
        console.log(updatedDestinationList);
      } 
      else if (destinationDroppableId === "previouslyRead") {
      updatedDestinationList = [...previouslyRead, movedBook];
      setPreviouslyRead(updatedDestinationList);
      }  
      else if (destinationDroppableId === "books") {
        updatedDestinationList = [...books, movedBook];
        console.log(movedBook);
        console.log(updatedDestinationList);
        setBooks(updatedSourceList);
      }
      setBooks(updatedSourceList);
      }
  }

  return (
    <div className="bg myLib">
      <h1>My Library</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="container">
          <Droppable droppableId="books">
            {(provided) => (
              <div className="row favourites mb-3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>Favourites</h3>
                {books.map((book, index) => (
                <Draggable key={book.id} draggableId={book.id} index={index}>
                {(provided) => (
                <Col
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                    <BookCard
                    //moveBook={moveBook}
                    removeBook={removeBook}
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
                  </div>
                  )}
                  </Droppable>
                  <Droppable droppableId="currentlyReading">
                  {(provided) => (
                  <div className="row current mb-3"
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
                        //moveBook={moveBook}
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
                  </div>
                  )}
                  </Droppable>
                  <Droppable droppableId="previouslyRead">
                  {(provided) => (
                    <div className="row previous mb-3"
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
                          //moveBook={moveBook}
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
                    </div>
                    )}
                    </Droppable>
                    </div>
                    </DragDropContext>
                    </div>
                    );
                    }

                    export default MyLibrary;
