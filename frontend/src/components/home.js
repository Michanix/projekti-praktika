import React from 'react';
import axios from 'axios';
import BooksGrid from './BooksGrid';

export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
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

        <div class="container">
            <main class="main-content">
				<div class="container">
					<div class="page">
                        <h2 class="page-title">Maybe you will find this interesting:</h2>
						<div class="row">
							<div class="col-md-9">
                            <BooksGrid books={books}/>
							</div>					
						</div> 
					</div>
				</div> 
			</main>
        </div>
            
    )}
}