import React from 'react'
import s1 from '../dummy/slide-1.jpg';
/*import s2 from '../dummy/slide-2.jpg';
import s3 from '../dummy/slide-3.jpg'; */


function Main() {
    return (

        <main class="main-content">
				<div class="container">
					<div class="page">
						<div class="row">
							<div class="col-md-9">
								<div class="slider">
									<ul class="slides">
										<li><a href= "../dummy/slide-1.jpg"><img src={s1} alt="Slide 1" /></a></li> 
										{/*<li><a href="../dummy/slide-2.jpg"><img src={s2} alt="Slide 2" /></a></li>
										<li><a href="../dummy/slide-3.jpg"><img src={s3} alt="Slide 3" /></a></li> */}
									</ul>
								</div>
							</div>
						</div> 
					</div>
				</div> 
			</main>
        
    )
}

export default Main