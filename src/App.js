import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import MovieDetails from './Pages/MovieDetails';

// import UpcomingSection from './Components/UpcomingSection';
// import Test from './Components/test';

function App() {
  return (
    <Router>  
          <Route exact path='/' component={ Home } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route path ='/movie/:id' component = { MovieDetails } />
          {/* <Route path='/movie/:id' render={props => <Movie {...props}/>} /> */}
    </Router>
  );
}

export default App;
