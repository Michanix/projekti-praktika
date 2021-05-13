import React from 'react'
import Mihailimage from '../../dummy/mihhail.png';
import Dmitriimage from '../../dummy/dmitri.jpg';
import Valeriaimage from '../../dummy/valeria.jpg';
import Maximage from '../../dummy/max.jpg';
import '../../css/about.css';

export default function About() { 
    return(
        <div>

            <main class="main-content">
				<div class="container">
                    <div class="page ">
						<div class="breadcrumbs">
							<a href="/">Home</a>
							<span>About us</span>
						</div>
                    <div class="row">

                    <div class="col-md-3">
                        <div class="team">
                            <figure class="team-image"><img src={Mihailimage} alt="Mihhail" width="500" height="200"/></figure>
                            <h2 class="team-name">Mihhail Matišinets</h2>
                            <small class="team-title">Product owner</small>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="team">
                            <figure class="team-image"><img src={Dmitriimage} alt="Dmitri" width="200" height="300"/></figure>
                            <h2 class="team-name">Dmitri Petšurov</h2>
                            <small class="team-title">Back-end developer</small>    
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="team">
                            <figure class="team-image"><img src={Valeriaimage} alt="Valeria" width="300" height="280"/></figure>
                            <h2 class="team-name">Valeria Nikitina</h2>
                            <small class="team-title">Front-end developer</small>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="team">
                            <figure class="team-image"><img src={Maximage} alt="Max" width="250" height="250"/></figure>
                            <h2 class="team-name">Max Petuhhov</h2>
                            <small class="team-title">SCRUM-Master</small>   
                        </div>
                    </div>
                    </div>
                </div>
            </div>
		</main>
            
            
        </div>
    )
}