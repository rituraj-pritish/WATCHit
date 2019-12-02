import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { ImageSliderOverlay } from './ImageSlider.styles';

const ImageSlider = ({ movies }) => {
  const [swiper, updateSwiper] = useState(null);

  const nextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  console.log(movies);

  const images =
    movies &&
    movies.results.map(({ title, vote_average, backdrop_path }) => (
      <div>
        <ImageSliderOverlay>h3</ImageSliderOverlay>
        <div
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path}`}) center top / cover no-repeat`,
            height: '90vh',
            width: '100%'
          }}
        />
      </div>
    ));

  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  setInterval(nextSlide, 3000);
  return (
    <div>
      <Swiper {...params} getSwiper={updateSwiper}>
        {images.map(image => image)}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
