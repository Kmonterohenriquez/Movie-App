import React from 'react'
import { Link } from 'react-router-dom';
import './MovieShow.css';
import Fade from 'react-reveal/Fade';
function MovieShow () {
        return (
            <div className='MovieShow-container sm-container'>
                <Fade left delay={700}><button><i class="fas fa-film"></i><Link to='#'>Movies</Link></button></Fade>
                <Fade right delay={700}><button><i class="fas fa-video"></i><Link to='#'>Shows</Link></button> </Fade>
            </div>
        );
}

export default MovieShow;