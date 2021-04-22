/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Mihailimage from '../dummy/mihhail.png';
import Dmitriimage from '../dummy/dmitri.jpg';
import Valeriaimage from '../dummy/valeria.jpg';
import Maximage from '../dummy/max.jpg';


function Main() {
    return (
        <main class="main-content">
				<div class="container">
					<div class="page">

					<div class="breadcrumbs">
							<a href="index.html">Home</a>
							<span>About us</span>
						</div>

						
						
						<h2 class="section-title">Our Team</h2>
						<div class="row">

							<div class="col-md-3">
								<div class="team">

									
									<figure class="team-image"><img src={Mihailimage} alt="Mihhail" /></figure>
									<h2 class="team-name">Mihhail Matišinets</h2>
									<small class="team-title">Product owner</small>
									<div class="social-links">
										<a href="https://www.facebook.com/profile.php?id=100004693838879" class="facebook"><i class="fa fa-facebook"></i></a>
								
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={Dmitriimage} alt="Dmitri" /></figure>
									<h2 class="team-name">Dmitri Petšurov</h2>
									<small class="team-title">Back-end developer</small>
									<div class="social-links">
										<a href="https://www.facebook.com/profile.php?id=100004693838879" class="facebook"><i class="fa fa-facebook"></i></a>
										
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={Valeriaimage} alt="Valeria"/></figure>
									<h2 class="team-name">Valeria Nikitina</h2>
									<small class="team-title">Front-end developer</small>
									<div class="social-links">
										<a href="https://www.facebook.com/profile.php?id=100004693838879" class="facebook"><i class="fa fa-facebook"></i></a>
										
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="team">
									<figure class="team-image"><img src={Maximage} alt="Max"/></figure>
									<h2 class="team-name">Max Petuhhov</h2>
									<small class="team-title">SCRUM-Master</small>
									<div class="social-links">
										<a href="https://www.facebook.com/profile.php?id=100004693838879" class="facebook"><i class="fa fa-facebook"></i></a>
										
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div> 
			</main>
        
    )
}

export default Main