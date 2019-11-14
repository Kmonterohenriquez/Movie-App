import React, { Component } from 'react';
import '../CSS/Home.css';

import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import MovieShow from '../Components/MovieShow';

import UpcomingAPI from '../Components/UpcomingAPI';
import TopRatedAPI from '../Components/TopRatedAPI';
import NowPlayingAPI from '../Components/NowPlayingAPI';
import PopularAPI from '../Components/PopularAPI';

import Footer from '../Components/Footer';


class Home extends Component {
    
    render() {
        return (
            <div className='Home-container'>
                <Navbar />
                <Showcase />
                {/* <MovieShow /> */}
                <div className='Section-container container'>
                    <UpcomingAPI />
                    <PopularAPI />
                    <NowPlayingAPI />
                    <TopRatedAPI />
                </div>    
                <Footer />
            </div>
        );
    }
}

export default Home;