import React, { Component } from 'react';

class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const params = {
            slidesPerView: 7, //make this number resonsive according to the width of the windows
            spaceBetween: 110,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
          }
        return (
            <div>
                <Swiper {...params}>
                    
                </Swiper>
            </div>
            
        );
    }
}

export default Swiper;