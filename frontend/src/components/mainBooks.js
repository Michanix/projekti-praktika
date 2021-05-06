import React, { useState } from 'react'
import axios from 'axios'
import imagenotfound from '../dummy/noimage.jpg';






export default class Books extends React.Component { 

    constructor(props){
        super(props); 
        
        this.state = {
            message: '',
            title: '',
            book: '',
            result: []


        }
        this.handleСhange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    };


    componentDidMount(){
    axios.get('http://localhost:3000/books').then(res => {
        console.log(res.data)
        {/*
        this.setState({
            message: res.data,
            book: '',
            result: []
            
        }) */}
    })}
    

    handleChange(event){

        event.preventDefault();
        this.setState({book: event.target.value})
        console.log(event.target.value)


    }

    handleSubmit(event){
        event.preventDefault();

        
        const url = `http://localhost:3000/api/books/search/${this.book}`
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({result: res.data})
            
        })
    }

    handleClick(book) {

        const url = `http://localhost:3000/api/bookpage/search/${this.book}`
        axios.get(url).then(res => {
            console.log(res.data)
            this.result = res.data
        })
    }


    render(){
        return(

        <main class="main-content">
            <div class="container">
                    

                <div class="page">
                    <div class="breadcrumbs">
                        <a href="index.html">Home</a>
                        <span>Book List</span>
                    </div>

                    <form  onSubmit={this.handleSubmit} >
                    <div class="form-group">
                    <input 
                        type="text" onChange={this.handleChange}
                        className="input-control" 
                        placeholder="Type something..." 
                        autoComplete="off" />
                    </div>

                    <button type="submit" className= "btn btn-danger">Search</button>

                    </form>

        
                    <div class="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">Action</option>
                            <option value="#">Drama</option>
                            <option value="#">Fantasy</option>
                            <option value="#">Horror</option>
                            <option value="#">Adventure</option>
                        </select>
                        <select name="#" id="#">
                            <option value="#">2012</option>
                            <option value="#">2013</option>
                            <option value="#">2014</option>
                        </select>
                    </div>
                

                    <div class="movie-list">
                        {this.state.result.map(book => (
                            
                            <div class="movie">

                                <div>
                                <figure class="movie-poster">
                                {(book.thumbnail != null)
                                    
                                    ? <a href='/bookpage'> <img src={book.thumbnail} alt="#" /></a>
                                    : <img src={imagenotfound} alt="notfound" />
                                }
                                </figure>
                                </div>
                                <div class="movie-title" >{book.title}</div>

                                <div>
                                {(book.authors != null)
                                    ? <p>{book.authors}</p>
                                    : <p>Unknown author</p>
                                }
                                </div>

                                <div>
                                {(book.publishedDate != null)
                                    ? <p>{book.publishedDate}</p>
                                    : <p> Unknown Publish Date </p>
                                }
                                </div>
                            </div>
                        ))}   
                        
                    </div>

                </div>
            </div> 
    </main>

            
        
    )}
}