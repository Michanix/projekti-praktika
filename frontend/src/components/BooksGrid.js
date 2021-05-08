import React from 'react';
import {Link} from "react-router-dom";
import '../css/booksGrid.css';

export default function BooksGrid(props) {
    const {books} = props;
    const renderBooks = books.map((book) => {
        const link = `/${book.id}`;

        return (
            <div class="box">
                <Link to={link}>
                    <img 
                    src={book.thumbnail} 
                    alt={book.title} 
                    width="200" height="300" />
                </Link>
                <div class="desc">
                    {book.title}
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