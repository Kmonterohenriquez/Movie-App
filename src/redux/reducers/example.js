import axios from 'axios';

const initialState = {
	movies: [],
	// reviews: [],
	// casts: [],
	// trailers: []
};

// ---------------- GET ANY  MOVIE PER CATEGORIES  ------------------
export const getMovies = () => dispatch =>{
		axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key_API}&language=en-US&page=1`
		)
		.then(res => res.json())
		.then(res => dispatch({
			type: REQUEST_MOVIES,
			payload: res.data.results
		}));
};

// // ------------ GET MOVIE REVIEWS -----------------
// export const getReviews = (id) => {
// 	let data = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key_API}&language=en-US&page=1`)
// 	.then(res => res.data.results)

// 	return {
// 		type: REQUEST_REVIEWS,
// 		payload: data
// 	}
// };

// // ----------------   GET CAST MOVIE   --------------------------
// export const getCasts = (id) =>{
// 	let data = axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=${key_API}`)
// 	.then(res => res.data)
// 	return{
// 		type: REQUEST_CASTS,
// 		payload: data
// 	}
// }


// // ----------------   GET Trailers MOVIE   --------------------------
// export const getTrailers = (id) =>{
// 	let data = axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key_API}&language=en-US`)
// 	.then(res => res.data)
// 	return{
// 		type: REQUEST_TRAILERS,
// 		payload: data
// 	}
// }


// ----------------   REDUCER FUNCTION   ------------------------
export default function movieReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_MOVIES:
			return { ...state, movies: action.payload };
		// case REQUEST_REVIEWS:
		// 	return {...state.reviews, payload};
		// case REQUEST_CASTS: 
		// 	return {...state.casts, payload };
		// case REQUEST_TRAILERS: 
		// 	return {...state.trailers, payload};
		default:
			return state;
	}
}
