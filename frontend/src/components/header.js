import React from 'react';
import '../css/header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return(
		<header class="site-header">
			<div class="container">
			`<ul>
					<a href="/"  id="branding"> 
					<img src="images/logo2.png" alt="" class="logo"/>
					<div class="logo-copy">
							<h1 class="site-title">Knigopoisk</h1>
							<small class="site-description">For your bookworm needs</small>
						</div>
					</a>
				<div class="main-navigation">
					<button type="button" class="menu-toggle">
						<i class="fa fa-bars"></i>
					</button>

					<ul class="menu">
						<li class="menu-item">
							<Link to="/">Home</Link>
						</li>
						<li class="menu-item">
							<Link to="/about">About</Link>
						</li>
						<li class="menu-item">
							<Link to="/books">Books</Link>
						</li>
					</ul>

					
				</div>

				<div class="mobile-navigation"></div>
			</ul>
		  </div>
		</header>
	)	
};
