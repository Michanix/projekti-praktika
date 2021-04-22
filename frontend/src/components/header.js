import React, {Component } from 'react';

class Header extends Component{
    render() {
        return(
            <header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<img src="images/logo2.png" alt="" class="logo"></img>
						<div class="logo-copy">
							<h1 class="site-title">Knigopoisk</h1>
							<small class="site-description">For your bookworm needs</small>
						</div>
					</a>
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item"><a href="index.html">Home</a></li>
							<li class="menu-item"><a href="about.html">About</a></li>
							<li class="menu-item"><a href="review.html">Books</a></li>
						</ul> 

						
					</div> 
					<div class="mobile-navigation"></div>
				</div>
			</header> )
    }
} export default Header;