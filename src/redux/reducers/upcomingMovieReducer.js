import { GET_UPCOMING_MOVIES } from '../actions/type';

const initialState = {
	upcomingMovies: []
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_UPCOMING_MOVIES:
			// console.log('Upcoming reducer fired');
			return { ...state, upcomingMovies: payload };
		default:
			return state;
	}
}
