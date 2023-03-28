import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard2 from "../../BookCard/BookCard2";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCDSKTTJ7qlByLi1isPupqW8QhNYxGlAPw" +
            "&maxResults=20"
        )
        .then((res) => {
          setData(res.data.items);
        //   console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <h1 className="display-4">Welcome to your ReadingRoom</h1>
            <p className="lead">
              "A book is a garden, an orchard, a storehouse, a party, a company
              by the way, a counselor, a multitude of counselors."
              <p>-Charles Baudelaire</p>
            </p>
          </div>
        </div>

        <div className="row">
          <h2>Find A Book!</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter A Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onkeypress={searchBook}
            />
            <button>
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
