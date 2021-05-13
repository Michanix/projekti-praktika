import React from 'react';
import {Link} from "react-router-dom";
import '../css/booksGrid.css';
import noimage from '../dummy/noimage.jpg'

export default function BooksGrid(props) {
    const {books} = props;
    const renderBooks = books.map((book) => {
        const link = `/${book.id}`;

        return (
            <div class="box">
                <Link to={link}>

                        {book.thumbnail != null 
                            ? <img src={book.thumbnail} alt="book-poster" width="200" height="300" />
                            : <img src={noimage} alt="" width="200" height="300" />
                        } 
                    
                    {/*<img src={book.thumbnail} alt="" width="200" height="300" />*/}
                </Link>
                <div class="desc">
                    <small class="book-title">{book.title} </small>
                </div>
            </div>
        );
    });

    return (
        
        <div class="wrapper">
            {renderBooks}
        </div>

    );
}