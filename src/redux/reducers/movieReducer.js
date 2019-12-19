import axios from 'axios';

const initialState = {
	movies: [],
	reviews: [],
	casts: [],
	trailers: []
};

const key_API = 'dd36eee247f144ba66fce886e88c3fa7';
const REQUEST_MOVIES = 'REQUEST_MOVIES';
const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
const REQUEST_CASTS = 'REQUEST_CASTS';
const REQUEST_TRAILERS = 'REQUEST_TRAILERS';

// ---------------- GET ANY  MOVIE PER CATEGORIES  ------------------
export const getMovies = (movieType) => {
	let data = axios
		.get(
			`https://api.themoviedb.org/3/movie/${movieType}?api_key=${key_API}&language=en-US&page=1`
		)
		.then(res.data);
	// .catch(err => err.message);

	return {
		type: REQUEST_MOVIES,
		payload: data
	};
};

// ------------ GET MOVIE REVIEWS -----------------
export const getReviews = (id) => {
	let data = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key_API}&language=en-US&page=1`)
	.then(res.data.results)

	return {
		type: REQUEST_REVIEWS,
		payload: data
	}
};

// ----------------   GET CAST MOVIE   --------------------------
export const getCasts = (id) =>{
	let data = axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=${key_API}`)
	.then(res.data)
	return{
		type: REQUEST_CASTS,
		payload: data
	}
}


// ----------------   GET Trailers MOVIE   --------------------------
export const getTrailers = (id) =>{
	let data = axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key_API}&language=en-US`)
	.then(res.data)
	return{
		type: REQUEST_TRAILERS,
		payload: data
	}
}


// ----------------   REDUCER FUNCTION   ------------------------
export default function getMovies(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case REQUEST_MOVIES:
			return { ...state.movies, payload };
		case REQUEST_REVIEWS:
			return {...state.reviews, payload};
		case REQUEST_CASTS: 
			return {...state.casts, payload };
		case REQUEST_TRAILERS: 
			return {...state.trailers, payload};
		default:
			return state;
	}
}
