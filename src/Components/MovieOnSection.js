import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/swiper/css/swiper.css';
import '../CSS/MovieOnSection.css';


class MovieOnSection extends Component {
    
    render() {
        const {  title, img, rating}=this.props;

        return (
            // Template for every movie shows on every section //
            <div className="Movie-container swipe-slide">
                {/* <Link to={`/details/`} > */}
                    <div className='movie-box '>
                        <img src={`http://image.tmdb.org/t/p/w185/${img}`} alt={title}/>
                        <p className='rating'><i class="fas fa-star"></i>{rating}</p>
                        <h1 className='title'>{title}</h1>
                    </div>
                {/* </Link> */}
            </div>
            
            
        );
    }
}

export default MovieOnSection;