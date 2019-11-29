import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Search/Header/Header';
import MoviesContainer from '../../Components/Search/MoviesContainer/MoviesContainer';
import SearchPagination from '../../Components/Search/SearchPagination/SearchPagination';
class Search extends Component {
	state = {
		sortBy: 'popularity.desc',
		voteAverage: null,
		withPeople: null,
		withGenres: null,
		withKeywords: null,
		year: null,
		page: 1,
		movies: []
	};
	componentDidMount() {
		const key_API = 'dd36eee247f144ba66fce886e88c3fa7';
		let { page } = this.state;
		axios
			.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${key_API}&language=en-US&sort_by=${
					this.state.sortBy
				}&include_adult=false&include_video=false&page=${page}&${
					this.state.voteAverage
						? `vote_average.gte=${this.state.voteAverage}&`
						: ''
				}${
					this.state.withGenres ? `with_genres=${this.state.withGenres}&` : ''
				}${
					this.state.withPeople ? `with_people=${this.state.withPeople}&` : ''
				}${this.state.year ? `year=${this.state.year}` : ''}`
			)
			.then(res => {
				console.log('Discover page result: ', res.data.results);
				let movies = res.data.results;
				this.setState({ movies });
			})
			.catch(error => console.log(error));
	}

	handlePagination = pageTransition => {
		if (this.state.page === 1 && pageTransition === '-') {
			this.setState({ page: 1 });
		} else if (pageTransition === '+') {
			this.setState({ page: this.state.page + 1 });
		} else if (pageTransition === '+') {
			this.setState({ page: this.state.page - 1 });
		}
	};

	render() {
		return (
			<div className='Search'>
				<Navbar />
				<Header />
				<MoviesContainer movies={this.state.movies} />
				<SearchPagination page={this.state.page} />
			</div>
		);
	}
}

export default Search;
