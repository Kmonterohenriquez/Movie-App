import React, { Component } from 'react'
import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css';
import './Cast.css'

class Cast extends Component {
state = {  }


    render() {
        // Initiates carousels
    (() => {
        const sliderEl = document.querySelectorAll('.Cast-container .swiper-container');
         if(!sliderEl){
           return;
         }
        new Swiper(sliderEl, {
           init: true,
           loop: true,
           spaceBetween: 1,
           observer: true,
           initialSlide: 1,
           breakpoints: {
             1150:{
              slidesPerView: 6
             },
             900: {
              slidesPerView: 5
            },
             750: {
              slidesPerView: 4
            },
             500: {
               slidesPerView: 3
             },
             300: {
              slidesPerView: 2,
              width: 200
            },
           },
           navigation: {
             nextEl: '.Cast-container .swiper-button-next',
             prevEl: '.Cast-container .swiper-button-prev',
           }
          });
          // mySwiper.slideTo(1, false,false);

      })();
  
      
        return (
            <div className='Cast-container'>
              <h1 className='title'>Cast</h1>
                <div className="swiper-container">
                    <div className='swiper-wrapper'>
                        {this.props.cast.map((curr, key)=> (
                          curr.profile_path?
                            <div className='swiper-slide' key={key}>
                                <div className='cast-box'>
                                  <img src={`http://image.tmdb.org/t/p/w185/${curr.profile_path}`} alt={curr.name}/>
                                  <h1>{curr.name}</h1>
                                </div>
                            </div>
                            :
                            null
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