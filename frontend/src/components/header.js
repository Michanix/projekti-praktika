import React, {Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<img src={window.location.origin + '/images/logo2.png'} alt="" class="logo"></img>
						<div class="logo-copy">
							<h1 class="site-title">Knigopoisk</h1>
							<small class="site-description">For your bookworm needs</small>
				        </div>
					</a> 
                </div>

			</header>
        )
    }
} export default Footer;