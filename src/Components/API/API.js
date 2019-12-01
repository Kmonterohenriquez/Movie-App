import React, { Component } from 'react';
import axios from 'axios';
import MovieOnSection from '../MovieOnSection';
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css';
import '../../CSS/SingleMovie.css';
import './API.css';
// import Fade from 'react-reveal/Fade';



class API extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}
	// Get Upcoming Movies from TheMoviesDB.com
	async componentDidMount() {
		const key_API = 'dd36eee247f144ba66fce886e88c3fa7';
		await axios
			.get(
				`
        https://api.themoviedb.org/3/movie/${this.props.type}?api_key=${key_API}&language=en-US&page=1`
			)
			.then(res => {
				console.log('upcoming movies: ', res);
				const movies = res.data.results;
				this.setState({ movies });
			});
	}

	render() {
		// Initiates carousels
		(() => {
			const sliderEl = document.querySelectorAll(
				'.Small-sliders .swiper-container'
			);
			if (!sliderEl) {
				return;
			}
			new Swiper(sliderEl, {
				init: true,
				slidesPerView: 7,
				loop: true,
				spaceBetween: 10,
				observer: true,

				breakpoints: {
					1300: {
						slidesPerView: 6
					},
					1100:{
						slidesPerView: 5
					},
					820: {
						slidesPerView: 4
					},
					600:{
						slidesPerView: 3
					},
					300: {
						slidesPerView: 2
					}
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			});
		})();

		return (
			<div className='Small-sliders'>
				<div className='swiper-container'>
					<h1 className='section-title'>{this.props.titleSection}</h1>

					<div className='swiper-wrapper'>
						{this.state.movies.map(movie => (
							
							<div className='single-movie swiper-slide'>
									{/* <Fade bottom delay={900} duration={1300}> */}
									<MovieOnSection
										id={movie.id}
										title={movie.title}
										img={movie.poster_path}
										rating={movie.vote_average}
									/>
						{/* </Fade> */}
								</div>
						))}
					</div>
					{/* <!-- Add Arrows --> */}
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</div>
			);
		}
	}
	
	export default API;
	