import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";
//import BooksAPI from "../../BooksAPI";

function MyLibrary() {


return (
    <div>
      <div className="container">
        <h2>My Library</h2>
        <div className="row current justify-content-center">
            <h3>Want To Read</h3>
            <div className="col">
            <BookCard
            id={library[0].id}
            title={library[0].title}
            image={library[0].image}
            author={library[0].author}>
            </BookCard>
            </div>
            <div className="col">
            <BookCard
            id={library[1].id}
            title={library[1].title}
            image={library[1].image}
            author={library[1].author}>
            </BookCard>
            </div>
            {/* {currentlyReading.map((book) => (
                <Col>
                <BookCard book={book} />
                </Col>
            ))} */}
        </div>
        <div className="row favourites justify-content-center">
            <h3>Currently Reading</h3>
            <div className="col">
            <BookCard
            id={library[2].id}
            title={library[2].title}
            image={library[2].image}
            author={library[2].author}>
            </BookCard>
            </div>
                {/* {favourites.map((book) => (
                <Col>
                <BookCard book={book} />
                </Col> 
            ))}  */}
        </div>
        <div className="row previous justify-content-center">
            <h3>Previously Read</h3>
            <div className="col">
            <BookCard
            id={library[3].id}
            title={library[3].title}
            image={library[3].image}
            author={library[3].author}>
            </BookCard>
            <BookCard
            id={library[4].id}
            title={library[4].title}
            image={library[4].image}
            author={library[4].author}>
            </BookCard>
            {/* {previouslyRead.map((book) => (
                <Col>
                <BookCard className="bookCard" book={book} />
                </Col>
            ))} */}
            </div>
        </div>
      </div>
    </div>
  );
}


export default MyLibrary;
