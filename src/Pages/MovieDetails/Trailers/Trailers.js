import React, { Component } from 'react'
import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css';

class Trailers extends Component {
    // Initiates carousels
    render() {
      (() => {
          const sliderEl = document.querySelectorAll('.swiper-container');
           if(!sliderEl){
             return;
           }
           const slider = new Swiper(sliderEl, {
             init: true,
             slidesPerView: 3,
             loop: true,
             spaceBetween: 0,
             observer: true,
    
             breakpoints: {
              1200: { slidesPerView: 3 }, 
              900: { slidesPerView: 2 },
              600: { slidesPerView: 1 },
             },
             
             navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
             }
           });
        })();
        // console.log(t)
        return (
            <div className='swiper-container'>
              <h1 className='Section-title'>Trailers</h1>
              <div className='swiper-wrapper'>
                {this.props.trailers.map( trailer =>(
                    <div className='swiper-slide'>
                        <iframe
                            title= {trailer.name}
                            width="360" 
                            height="220" 
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                ))}
                </div>
                <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
            </div>
        );
    }
}

export default Trailers;