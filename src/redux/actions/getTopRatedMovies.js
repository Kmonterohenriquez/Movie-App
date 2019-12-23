import { GET_TOP_RATED_MOVIES, KEY_API } from './type';

const getTopRatedMovies = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_API}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: GET_TOP_RATED_MOVIES,
				payload: res.data.results
			})
		);
};

export default getTopRatedMovies;
