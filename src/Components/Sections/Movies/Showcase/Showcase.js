import React, { Component } from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import '../../../../../node_modules/swiper/css/swiper.css';
import { Link } from 'react-router-dom';

import './Showcase.css';
class Showcase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}

	// Get Upcoming Movies from TheMoviesDB.com
	componentDidMount() {
		const key_API = 'dd36eee247f144ba66fce886e88c3fa7';
		axios
			.get(
				`
        https://api.themoviedb.org/3/movie/now_playing?api_key=${key_API}&language=en-US&page=1`
			)
			.then(res => {
				console.log(res.data.results);
				const movies = res.data.results;
				this.setState({ movies });
			});
	}

	render() {
		// Initiates carousels
		(() => {
			const sliderEl = document.querySelectorAll(
				'.Showcase-container .swiper-container'
			);
			if (!sliderEl) {
				return;
			}
			new Swiper(sliderEl, {
				init: true,
				slidesPerView: 1,
				loop: false,
				spaceBetween: 0,
				observer: true,
				speed: 2200,
				autoplay: {
					delay: 1700,
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar'
				}
			});
		})();
		return (
			<div className='Showcase-container'>
				<div className='swiper-container'>
					<div className='swiper-wrapper'>
						{this.state.movies.map(movie => (
							<div className='swiper-slide'>
								<Link to={`/movie/${movie.id}`}>
									<div className='Showcase-img'>
										<img
											src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
											alt={`${movie.backdrop_path} backdrop`}
										/>
									</div>
									<div className='Movie-info'>
										<h3>Latest</h3>
										<h1 className='Showcase-title'>{movie.title}</h1>
										<p className='Showcase-rating'>
											Drama | {movie.vote_average} Rating
										</p>
									</div>
							</Link>
								</div>
						))}
					</div>
					<div class='swiper-pagination'></div>
				</div>
			</div>
		);
	}
}

export default Showcase;
