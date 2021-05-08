import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import '../../css/book.css';

async function fetchBook(id) {
    const url = `http://localhost:3000/api/books/lookup/${id}`;
    const res = await axios.get(url);
    return res.data;
}

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {},
            img: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        const res = fetchBook(id);
        res.then(book => {
            this.setState({
                book: book,
                img: book.images.small,
            })
            console.log(book)
        })
    }

    render() {
        const {title} = this.state.book;
        const img = this.state.img;
        return (
            <div className="book-wrapper">
                <div className="book-box book-title">
                    {title}
                </div>
                <div className="book-box book-img">
                    <img src={img} alt={title} width="400" height="400"/>
                </div>
            </div>
        )
    }
}

export default withRouter(Book);