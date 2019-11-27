import React, { Component } from 'react'
import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css';

class Cast extends Component {
state = {  }


    render() {
        // Initiates carousels
    (() => {
        const sliderEl = document.querySelectorAll('.Cast-container .swiper-container');
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
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           }
         });
      })();
  
        return (
            <div className='Cast-container'>
                <div className="swiper-container">
                    <div className='swiper-wrapper'>
                        {this.props.cast.map((curr, key)=> (
                            <div className='swiper-slide'>
                                <img src={`http://image.tmdb.org/t/p/w185/${curr.profile_path}`} alt={curr.name}/>
                                <h1>{curr.name}</h1>
                                <p>{curr.character}</p>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        );
    }
}

export default Cast;