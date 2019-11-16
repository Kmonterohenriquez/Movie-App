import React from 'react'
import { Link } from 'react-router-dom';
import './MovieShow.css';

function MovieShow () {
        return (
            <div className='MovieShow-container sm-container'>
                <button><i class="fas fa-film"></i><Link to='#'>Movies</Link></button>
                <button><i class="fas fa-video"></i><Link to='#'>Shows</Link></button> 
            </div>
        );
}

export default MovieShow;