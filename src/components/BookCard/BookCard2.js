import react, { useState } from "react";
import Modal from "./Modal";
import { ImQuill } from "react-icons/im";
import {ImStatsBars} from "react-icons/im";
import "./BookCard_Modal.css";

const BookCard2 = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    // console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let author=item.volumeInfo.authors;
                    let averageRating = item.volumeInfo.averageRating;

                    if(!averageRating){
                        averageRating = "N.A.";
                    }

                    if(thumbnail!= undefined && author!= undefined)
                    {
                        return (
                            <>
                            <div className="bcard" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <h3 className="author"><ImQuill /> Author: <em>{author}</em></h3>
                                    <h3 className="author"><ImStatsBars /> Rating: <em>{averageRating} / 5</em></h3>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default BookCard2;