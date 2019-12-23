import { GET_NOW_PLAYING_MOVIES, KEY_API } from './type';

const getNowPlayingMovies = () => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY_API}&language=en-US&page=1`
		)
		.then(res =>
			dispatch({
				type: GET_NOW_PLAYING_MOVIES,
				payload: res.data.results
			})
		);
};
export default getNowPlayingMovies;
