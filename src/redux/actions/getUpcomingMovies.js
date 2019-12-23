import { GET_UPCOMING_MOVIES, KEY_API } from './type';
import axios from 'axios'

const getUpcomingMovies = () => dispatch => {
	console.log('upcoming action fired')
	axios
		.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_API}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: GET_UPCOMING_MOVIES,
				payload: res.data.results
			})
		);
};

export default getUpcomingMovies;
