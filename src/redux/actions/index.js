import {REQUEST_MOVIES, KEY_API} from './type'
import axios from 'axios'

const getMovies = (type) => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/${type}?api_key=${KEY_API}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: REQUEST_MOVIES,
				payload: res.data.results
			})
		);
};

export default getMovies;