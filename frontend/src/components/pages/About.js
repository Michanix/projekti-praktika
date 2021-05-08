import React from 'react'
import Mihailimage from '../../dummy/mihhail.png';
import Dmitriimage from '../../dummy/dmitri.jpg';
import Valeriaimage from '../../dummy/valeria.jpg';
import Maximage from '../../dummy/max.jpg';
import '../../css/about.css';

export default function About() { 
    return(
        <div>
            <span>Our Team</span>
            <div class="about-wrapper">
                <div class="about-box">
                    <figure class="team-image"><img src={Mihailimage} alt="Mihhail" width="300" height="300"/></figure>
                    <h2 class="team-name">Mihhail Matišinets</h2>
                    <small class="team-title">Product owner</small>
                </div>
                <div class="about-box">
                    <figure class="team-image"><img src={Dmitriimage} alt="Dmitri" width="300" height="300"/></figure>
                    <h2 class="team-name">Dmitri Petšurov</h2>
                    <small class="team-title">Back-end developer</small>    
                </div>
                <div class="about-box">
                    <figure class="team-image"><img src={Valeriaimage} alt="Valeria" width="300" height="300"/></figure>
                    <h2 class="team-name">Valeria Nikitina</h2>
                    <small class="team-title">Front-end developer</small>
                </div>
                <div class="about-box">
                    <figure class="team-image"><img src={Maximage} alt="Max" width="300" height="300"/></figure>
                    <h2 class="team-name">Max Petuhhov</h2>
                    <small class="team-title">SCRUM-Master</small>   
                </div>
                </div> 
        </div>
    )
}