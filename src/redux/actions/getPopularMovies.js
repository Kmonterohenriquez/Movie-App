import { GET_POPULAR_MOVIES, KEY_API } from './type';
import axios from 'axios'

const getPopularMovies = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: GET_POPULAR_MOVIES,
				payload: res.data.results
			})
		);
};

export default getPopularMovies