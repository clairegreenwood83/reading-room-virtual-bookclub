import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Cont } from 'react-bootstrap';
import "./MyLibrary.css"; 
import BookCard from "../../BookCard/BookCard";
import library from "../../library.json";

function MyLibrary() {
// const [currentlyReading, setCurrentlyReading] = useState([]);
// const [favourites, setFavourites] = useState([]);
// const [previouslyRead, setPreviouslyRead] = useState([]);

// const addToCurrentlyReading = (book) => {
// setCurrentlyReading([...currentlyReading, book]);
// };

// console.log(currentlyReading);

// const addToFavourites = (book) => {
// setFavourites([...favourites, book]);
// };

// const addToPreviouslyRead = (book) => {
// setPreviouslyRead([...previouslyRead, book]);
// }

//  addToCurrentlyReading({ 
//     title: "The Great Gatsby", 
//     author: "F. Scott Fitzgerald", 
//     coverImage: "https://example.com/greatgatsby.jpg" 
//   });

//   addToFavourites({ 
//     title: "To Kill a Mockingbird", 
//     author: "Harper Lee", 
//     coverImage: "https://example.com/tokillamockingbird.jpg" 
//   });



//   addToPreviouslyRead({ 
//     title: "1984", 
//     author: "George Orwell", 
//     coverImage: "https://example.com/1984.jpg" 
//   });

return (
    <div>
      <div className="container">
        <h2>My Library</h2>
        <div className="row current justify-content-center">
            <h3>Currently Reading</h3>
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
            <h3>Favourites</h3>
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
            <div className="col-3-md">
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
