import React, { useEffect, useState } from "react";
import { ReactReader } from 'react-reader'
import './style.css'; 

const Reader = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null);
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="cotr py-4 bg">
      <div className="mx-auto">
        <h1>Reader</h1> 
        <div className="viewer"> 
          <ReactReader
            location={location}
            locationChanged={locationChanged}
            url="https://react-reader.metabits.no/files/alice.epub"
          />
        </div>    
        <div className="comments">
          
        </div>
      </div>
    </div>
  );
}

export default Reader;