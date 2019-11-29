import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Search from './Pages/Search/Search';

// import UpcomingSection from './Components/UpcomingSection';
// import Test from './Components/test';

function App() {
	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<Route path='/movie/:id' component={MovieDetails} />
			<Route exact path='/Search' component={Search} />
			{/* <Route path='/movie/:id' render={props => <Movie {...props}/>} /> */}

		</Router>
	);
}

export default App;
