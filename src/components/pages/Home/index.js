import React from "react";
import './style.css'

function Home() {
    return (
      <div className="ctr py-4 bg">
        <div className="p-5 mb-4 bg-light rounded-3 jb">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">ReadingRoom</h1>
            <p className="col-md-8 fs-4">Welcome to your book management web app!</p>
            <button className="btn btn-primary btn-lg" type="button">Enter</button>
          </div>
        </div>
        <div className="row align-items-md-stretch mini">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Our Motivation</h2>
              <p>We wanted a one-stop shop where we could manage our book 
                library, search for books on different marketplaces and read in a collaborative 
                way with other people.</p> 
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Search for books</h2>
              <p>You can search for books to add to your library! You can also view more information 
                about each result </p>
              <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
}
   
export default Home;