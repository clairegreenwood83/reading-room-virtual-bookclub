import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/navbar/sidebar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
import Search from "./components/pages/Search/Search";
import ContactForm from "./components/pages/Contact/ContactForm";
import Reader from "./components/pages/Reader";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}

          <Route path="/" element={<Home />} />
          <Route path="/MyLibrary" element={<MyLibrary />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
