/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'



export default class Bookpage extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            message: '',
            title: ''

        }
    };

    componentDidMount(){
    axios.get('http://localhost:3000/homepage').then(res => {
        console.log(res.data)
        this.setState({
            message: res.data
        })
    })};



    render(){
        return(

            <main class="main-content">
			
				<div class="container">
					<div class="page">
						<div class="breadcrumbs">
							<a href="index.html">Home</a>
							<a href="review.html">Movie Review</a>
							<span>The Croods</span>
						</div>

						<div class="content">
							
							<div class="row">
								<div class="col-md-6">
									<figure class="movie-poster"><img src="dummy/example.jpg" alt="#"/></figure>
								</div>
								<div class="col-md-6">
									<h2 class="movie-title">Tittle</h2>
									<ul class="movie-meta">
										<li><strong>Date:</strong> Day, Month, Year</li>
										<li><strong>Category:</strong> Animation/Adventure/Comedy</li>
									</ul>
									<div class="movie-summary">
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

										<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed.</p>
									</div>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</main>
        
    )}
}