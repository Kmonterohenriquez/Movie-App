import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
import '../../node_modules/swiper/css/swiper.css';
// Version >= 2.4.0
// import 'swiper/css/swiper.css';

const Test = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return(
    <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
  )
}

export default Test;
