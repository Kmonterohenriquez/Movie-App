
  
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import getMovies from './reducers/movieReducer';
import getReviews from './reducers/movieReducer';
import getCasts from './reducers/movieReducer';
import getTrailers from './reducers/movieReducer';

const rootReducer = combineReducers({ 
    getMovies,
    getReviews,
    getCasts,
    getTrailers
});


export default createStore(rootReducer, applyMiddleware(promiseMiddleware));