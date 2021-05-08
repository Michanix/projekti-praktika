import React from 'react';
import axios from 'axios';
import BooksGrid from './BooksGrid';

export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            message: '',
            title: '',
            books: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/books/')
        .then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    render(){
        const {books} = this.state;

        return(
            <BooksGrid books={books}/>
    )}
}