import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

import UpcomingSection from '../Components/UpcomingAPI';
import TopRatedAPI from '../Components/TopRatedAPI';
import NowPlayingAPI from '../Components/NowPlayingAPI';
import PopularAPI from '../Components/PopularAPI';


class Home extends Component {
    
    render() {
        return (
            <div className='Home-container'>
                <Navbar />
                <div className='container'>
                    <UpcomingSection />
                    <PopularAPI />
                    <NowPlayingAPI />
                    <TopRatedAPI />
                </div>    
            </div>
        );
    }
}

export default Home;