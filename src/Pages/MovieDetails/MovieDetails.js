import React, { Component } from 'react';
import axios from 'axios';
import './MovieDetails.css';

import Header from './Header/Header';
import Summary from './Summary/Summary';
import Cast from './Cast/Cast';
import Trailers from './Trailers/Trailers';
import PopularReviews from './PopularReviews/PopularReviews';

class MovieDetails extends Component {
	state = {
		movie: [],
		reviews: [],
		trailers: [],
		cast: []
	};

	// Get All Info from TheMovieDB API
	componentDidMount() {
		const { match } = this.props;
		const key_API = 'dd36eee247f144ba66fce886e88c3fa7';

		// Get General Info About a Movie
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${key_API}&language=en-US`
			)
			.then(res => {
				const movie = res.data;
				this.setState({ movie });
			})
			.catch(error => console.log(error));

		// Get Reviews
		axios
			.get(
				
			)
			.then(res => {
				// console.log('Reviews results: ', res.data.results);
				const reviews = res.data.results;
				this.setState({ reviews });
			})
			.catch(error => console.log(error));

		// Get Trailers
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${key_API}&language=en-US`
			)
			.then(res => {
				const trailers = res.data.results;
				this.setState({ trailers });
			})
			.catch(error => console.log(error));

		axios
			.get(
				`http://api.themoviedb.org/3/movie/${match.params.id}/casts?api_key=${key_API}`
			)
			.then(res => {
				const cast = res.data.cast;
				this.setState({ cast });
			});
	}

	render() {
		const {
			title,
			backdrop_path,
			overview,
			poster_path,
			vote_average,
			original_language,
			genres
		} = this.state.movie;

		let pageContent = genres ? (
			<div id='MovieDetails-container'>
				<Header
					title={title}
					backdrop_path={backdrop_path}
					poster_path={poster_path}
					vote_average={vote_average}
					original_language={original_language}
					genres={genres}
				/>
				<div className='container'>
					<Summary overview={overview} />
					<Cast cast={this.state.cast} />
					<Trailers trailers={this.state.trailers} />
					<PopularReviews reviews={this.state.reviews} />
				</div>
			</div>
		) : (
			<div> OtherStuff </div>
		);
		return pageContent;
	}
}

export default MovieDetails;
