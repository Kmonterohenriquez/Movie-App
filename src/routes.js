import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Search from './Pages/Search/Search';
import Profile from './Pages/Profile/Profile';

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/login' component={Login} />
		<Route exact path='/signup' component={SignUp} />
		<Route path='/profile' component={Profile} />
		<Route exact path='/Search' component={Search} />
		<Route path='/movie/:id' component={MovieDetails} />
	</Switch>
);
