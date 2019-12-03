import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './ImageSlider.css'
import {
  ImageOverlay,
  OverlayContent,
  BackgroundImage
} from '../../index.styles';

const ImageSlider = ({ movies }) => {
  const [swiper, updateSwiper] = useState(null);

  useEffect(() => () => {
    clearInterval(interval);
  });

  const nextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const interval = setInterval(nextSlide, 3000);

  const images =
    movies &&
    movies.results.map(({ title, vote_average, backdrop_path, id }) => (
      <Link to={`/movie/${id}`} key={id}>
        <ImageOverlay />
        <BackgroundImage
          position='absolute'
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path}`}) center top / cover no-repeat`,
            width: '100%',
            height: '90vh'
          }}
        />
        <OverlayContent>
          <h1>{title}</h1>
          <span>genre</span> | Rating: {vote_average}
        </OverlayContent>
      </Link>
    ));

  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    containerClass: 'custom-swiper-container',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <Swiper {...params} getSwiper={updateSwiper}>
      {images.map(image => image)}
    </Swiper>
  );
};

export default ImageSlider;
