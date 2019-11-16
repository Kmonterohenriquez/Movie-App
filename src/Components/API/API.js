import React, { Component } from 'react';
import axios from 'axios';
import MovieOnSection from '../MovieOnSection';
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.css';
import '../../CSS/SingleMovie.css';
import './API.css';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies:[],
         };
    }
    // Get Upcoming Movies from TheMoviesDB.com
    async componentDidMount() {
        const key_API='dd36eee247f144ba66fce886e88c3fa7';
        await axios.get(`
        https://api.themoviedb.org/3/movie/${this.props.type}?api_key=${key_API}&language=en-US&page=1`)
          .then(res => {
              console.log(res.data.results);
            const movies = res.data.results;
            this.setState({ movies });
          })
      }

      render() {
        // Initiates carousels
    (() => {
      const sliderEl = document.querySelectorAll('.swiper-container');
       if(!sliderEl){
         return;
       }
       const slider = new Swiper(sliderEl, {
         init: true,
         slidesPerView: 6,
         loop: true,
         spaceBetween: 10,
         observer: true,

         breakpoints: {
           1300:{
            slidesPerView: 7

           },
           800: {
            slidesPerView: 5
          },
           650: {
            slidesPerView: 4
          },
           550: {
             slidesPerView: 3
           },
           400: {
            slidesPerView: 2
          },
         },
         pagination: {
           el: '.swiper-pagination',
           clickable: true
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         }
       });
    })();

        

          return (
            
            <div>
                <div className="swiper-container">
                
                  <h1 className='section-title'>{this.props.titleSection}</h1>

                  <div className='swiper-wrapper'>
                    { this.state.movies.map(movie =>{
                        var result =
                        <div className='single-movie swiper-slide'>
                          <MovieOnSection 
                          from=   'TopRatedAPI' 
                          id=     {movie.id} 
                          title=  {movie.title}
                          img=    {movie.poster_path} 
                          rating= {movie.vote_average}
                          />
                        </div>
                        ;
                        return result
                    })}
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        );
    }
}

export default (API);