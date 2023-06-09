import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard2 from "../../BookCard/BookCard2";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter" || !evt.key) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCDSKTTJ7qlByLi1isPupqW8QhNYxGlAPw" +
            "&maxResults=20"
        )
        .then((res) => {
          setData(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="cont">
      <div>
        <div className="jumbotron jumbotron-fluid col-12 bg-search">
          <div className="container-fluid ">
            <h1 className="display-4">Welcome to your <span>ReadingRoom</span></h1>
            <p className="lead">
              "A book is a garden, an orchard, a storehouse, a party, a company
              by the way, a counselor, a multitude of counselors."<b>- Charles Baudelaire</b>
            </p>
          </div>
        </div>

        <div className="rowsb col-12 mx-auto">
          <h2>Find A Book!</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter A Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button  onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container">{<BookCard2 book={bookData} />}</div>
    </div>
  );
};
export default Search;
