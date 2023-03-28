// import react from 'react';
import {BsBookmarkHeart} from "react-icons/bs";
import "./BookCard_Modal.css";

const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let category = item.volumeInfo.categories;
    let pageCount = item.volumeInfo.pageCount;

    if(!category){
        category = "N.A."
    }

    if(!pageCount){
        pageCount = "N.A."
    }

    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
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
                            <a href=""><button className="favbtn">Add to <BsBookmarkHeart /></button></a>
                        </div>
                    </div>
                    <h4 className="descriptionbook">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;