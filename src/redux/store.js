import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getUpcomingMovies from './reducers/upcomingMovieReducer'
import getPopularMovies from './reducers/popularMovieReducer'

const rootReducer = combineReducers({
    getPopularMovies,
    getUpcomingMovies
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
