import axios from 'axios';
import React, { useState } from 'react'
import imagenotfound from '../dummy/noimage.jpg';




function Main() {
    var acc = document.getElementsByClassName("accordion");


    const [book,setBook] = useState("");
    const [result,setResult] = useState([]);

    function handleChange(event){

        const book = event.target.value;
        setBook(book);
    }
  

    function handleSubmit(event){
        event.preventDefault();

        
        const url = `http://localhost:3000/api/books/search/${book}`
        axios.get(url).then(res => {
            console.log(res.data)
            setResult(res.data)
        })
    }

    

    return (

        <main class="main-content">
        <div class="container">
                

            <div class="page">
                <div class="breadcrumbs">
                    <a href="index.html">Home</a>
                    <span>Book List</span>
                </div>

                <form onSubmit={handleSubmit}>
                <div class="form-group">
                <input 
                    type="text" onChange={handleChange}
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
                {result.map(book => (
                    
                    <div class="movie">
                        
                        

                        <div>
                        {(book.thumbnail != null)
                            ? <figure class="movie-poster"><img src={book.thumbnail} alt="#"/></figure>
                            : <figure class="movie-poster"><img src={imagenotfound} alt="notfound" /></figure>
                        }
                        </div>
                        <div class="movie-title"><a href={book.link}>{book.title}</a></div>

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


                
                

                {/*

                <div class="pagination">
                    <span class="page-number current">1</span>
                    <a href="#" class="page-number">2</a>
                    <a href="#" class="page-number">3</a>
                    <a href="#" class="page-number">4</a>
                    <a href="#" class="page-number">5</a>
                    
                </div>
                */}
            </div>
        </div> 
    </main>
        
    )
}

export default Main