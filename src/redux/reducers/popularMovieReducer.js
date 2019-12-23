import { GET_POPULAR_MOVIES } from '../actions/type';

const initialState = {
	popularMovies: []
};

export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_POPULAR_MOVIES:
			return { ...state, popularMovies: payload };
		default:
			return state;
	}
}
