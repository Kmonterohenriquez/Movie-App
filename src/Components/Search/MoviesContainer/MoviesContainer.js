import React, { Component } from 'react';
import './MovieContainer.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class MoviesContainer extends Component {
	render() {
		return (
			<div className='MovieContainer container grid-search'>
				{this.props.movies.map(movie =>
					movie.poster_path ? 
						<Fade bottom delay={800} duration={1300}>
							<Link to={`/movie/${movie.id}`} key={movie.id}>
								<div className='Single-movie'>
									<img
										src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
										alt={`${movie.title} poster`}
									/>
									<h1> {movie.title} </h1>
									<p>
										<i className='fas fa-star'></i>
										{movie.vote_average}
									</p>
								</div>
							</Link>
						</Fade>
					 : null
				)}
			</div>
		);
	}
}

export default MoviesContainer;
