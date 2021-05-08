import React from 'react';
import axios from 'axios';
import BooksGrid from '../BooksGrid';

export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            books: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const {search} = this.state;
        const url = `http://localhost:3000/api/books/search/${search}`
        axios.get(url).then(res => {
            this.setState({books: res.data})  
        })
    }

    render() {
        const {books} = this.state;

        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.search} onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    {
                        books.length > 0 && 
                        <BooksGrid books={books} />
                    }
                </div>
            </div>
        )
    }
}