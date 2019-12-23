import React, { Component } from 'react';
// import axios from 'axios';
import MovieOnSection from '../MovieOnSection';
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css';
import '../../CSS/SingleMovie.css';
import './SectionSwiper.css';

// import Fade from 'react-reveal/Fade';

class SectionSwiper extends Component {
	render() {
		let movies = this.props.moviesData;

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
					1100: {
						slidesPerView: 5
					},
					820: {
						slidesPerView: 4
					},
					600: {
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
					{/* <h1 className='section-title'>movie section</h1> */}

					<div className='swiper-wrapper'>
						{movies.map(movie => (
							<div className='single-movie swiper-slide' key={movie.id}>
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


export default SectionSwiper;
