import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import '../../css/book.css';
import noimage from '../../dummy/noimage.jpg'

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
            img: '',
            lang: '',
            author: '',
            category: {},
            description: '',
            maturityR: '',
            pubDate: '',
            rating: ''
            

        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        const res = fetchBook(id);
        res.then(book => {
            this.setState({
                book: book,
                img: book.thumbnail,
                lang: book.language,
                author:  book.authors,
                category:  book.categories,
                description:  book.description,
                maturityR:  book.maturityRating,
                pubDate: book.publishedDate,
                rating: book.averageRating
            })
            console.log(book)
        })
    }

    render() {
        const {title} = this.state.book;
        const img = this.state.img;
        const lang = this.state.lang;
        const author = this.state.author;
        const category = this.state.category;
        const description = this.state.description;
        const maturityR = this.state.maturityR;
        const pubDate= this.state.pubDate;
        const rating= this.state.rating;


        return (

            <main class="main-content">
				<div class="container">
                                <div class="row">
                                    <div class="col-sm-3">
                                            {img != null 
                                                ? <img src={img} alt="book-poster" width="300" height="auto"/>
                                                : <img src={noimage} alt="book-poster" width="300" height="auto"/>
                                            } 
                                    
                                        
                                    </div>
                                    <div class="col-md-1">
                                        <h2 class="book-title">{title}</h2>
                                            {author != null 
                                                ? <p><span>Author: {author}</span></p>
                                                : <p><span>Author: Unknown</span></p>
                                            } 
                                            {category != null 
                                                ? <p><span>Category: {category[1]}</span></p>
                                                : <p><span>Category: Not specified </span></p>
                                            } 

                                            {pubDate != null 
                                                ? <p><span>Publishing Date: {pubDate}</span></p>
                                                : <p><span>Publishing Date: Unknown</span></p>
                                            } 

                                            {lang != null 
                                                ? <p><span>Language: {lang}</span></p>
                                                : <p><span>Language: Unknown</span></p>
                                            }

                                            {rating != null 
                                                ? <p><span>Rating: {rating}</span></p>
                                                : <p><span>Rating: not available</span></p>
                                            } 

                                            {maturityR != null 
                                                ? <p><span>Maturity Rating: {maturityR.toLowerCase()}</span></p>
                                                : <p><span>Maturity Rating: Unknown</span></p>
                                            } 

                                            {description != null 
                                                ? <p><span>Description: {description.replace(/<[^>]+>/g, '')}</span></p>
                                                : <p><span>Description: None</span></p>
                                            } 
    
                                    </div>
							    </div>
				</div> 
			</main>

            
        )
    }
}

export default withRouter(Book);