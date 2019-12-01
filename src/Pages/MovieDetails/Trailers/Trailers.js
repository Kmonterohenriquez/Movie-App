import React, { Component } from 'react'
import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.css';
import './Trailers.css'

class Trailers extends Component {
    // Initiates carousels
    render() {
      (() => {
          const sliderEl = document.querySelectorAll('.Trailers-container .swiper-container');
           if(!sliderEl){
             return;
           }
            new Swiper(sliderEl, {
             init: true,
             slidesPerView: 3,
             loop: true,
             spaceBetween: 0,
             observer: true,
    
             breakpoints: {
              1470: { slidesPerView: 3 }, 
              1050: { slidesPerView: 2 },
              300: { slidesPerView: 1 },
             },
             
             navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
             }
           });
        })();
        // console.log("Qty of trailers:", this.props.trailers.length)
        return (
          <div className='Trailers-container'>
            <div className='swiper-container '>
              <h1 className='Section-title'>Trailers</h1>
              <div className='swiper-wrapper'>
                {this.props.trailers.map( (trailer, key ) =>(
                    <div className='swiper-slide' key={key}>
                        <iframe
                            title= {trailer.name}
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                ))}
                </div>

              {this.props.trailers.length === 1?'':
              <div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
              }
            </div>
          </div>
        );
    }
}

export default Trailers;