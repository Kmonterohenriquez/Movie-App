import React, { Component } from 'react';
import './Home.css';

import Navbar from '../../Components/Navbar/Navbar';
import Showcase from '../../Components/Sections/Movies/Showcase/Showcase';
import MovieShow from '../../Components/MovieOrShow/MovieShow';

import UpcomingAPI from '../../Components/Sections/Movies/UpcomingAPI/UpcomingAPI';
// import TopRatedAPI from '../../Components/Sections/Movies/TopRatedAPI/TopRatedAPI';
// import NowPlayingAPI from '../../Components/Sections/Movies/NowPlayingAPI/NowPlayingAPI';
import PopularAPI from '../../Components/Sections/Movies/PopularAPI/PopularAPI';

import Footer from '../../Components/Footer/Footer';


class Home extends Component {
	render() {
		return (
			<div className='Home-container'>
				<Navbar />
				<Showcase />
				
				<MovieShow />
				<div className='Section-container container'>
					<UpcomingAPI />
					<PopularAPI />
					{/* <NowPlayingAPI />
					<TopRatedAPI /> */}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
