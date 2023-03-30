import React, { useEffect } from 'react';
import {BsBookmarkHeart} from "react-icons/bs";
import "./BookCard_Modal.css";

const Modal=({show,item,onClose})=>{
    let read = false;
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let category = item.volumeInfo.categories;
    let pageCount = item.volumeInfo.pageCount;

    if (item.volumeInfo.title.includes("Dracula")) {
        console.log('true');
        read = true;
    } else {
        console.log('false');
        read = false;
    }

    if(!category){
        category = "N/A."
    }

    if(!pageCount){
        pageCount = "N/A."
    }

    const saveBook = (e) => {
        e.preventDefault();
        let arr = JSON.parse(localStorage.getItem("myLibrary"));

        if (!arr) {
            arr = [];
        }

        if(arr.filter(value=> value.title==item.volumeInfo.title).length > 0) {
            console.log("Already in library!");
        }          
        else {
            arr.unshift(item.volumeInfo);
            localStorage.setItem("myLibrary", JSON.stringify(arr));
        }   
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h2><strong>Author: </strong><em>{item.volumeInfo.authors}</em></h2>
                            <h2><strong>Publisher: </strong><em>{item.volumeInfo.publisher}</em></h2>
                            <h2><strong>Publish Date: </strong><em>{item.volumeInfo.publishedDate}</em></h2>
                            <h2><strong>Category: </strong><em>{category}</em></h2>
                            <h2><strong>Page Count: </strong><em>{pageCount}</em></h2>
                            <a href={item.volumeInfo.previewLink} target="_blank" rel="noreferrer noopener"><button className="infobtn">More</button></a>
                            <button className="favbtn" onClick={saveBook}>Add to <BsBookmarkHeart /></button>
                            {
                                read === false ? 
                                <></> : 
                                <button className="readNow"><a href="/reader" >Read Now</a></button>
                            }
                        </div>
                    </div>
                    <h4 className="descriptionbook">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;