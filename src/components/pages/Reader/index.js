import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader"
import "./style.css";  
import Comments from "../Comments";

const Reader = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null); 
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  }

  useEffect(() => {
    console.log(location);
  }, [location])  

  return (
 
    <div className="cotr py-4 bg-reader">
      <div className="mx-auto">
        <h1>Reader</h1> 
        <div className="viewer"> 
          <ReactReader
            title="Dracula"
            location={location}
            locationChanged={locationChanged}
            url="/Dracula.epub"
          />
        </div>   
      </div>
      <Comments />
    </div>
 
  );
}

export default Reader;