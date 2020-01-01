import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './ImageSlider.css';
import {
  ImageOverlay,
  OverlayContent,
  BackgroundImage
} from '../../index.styles';
import { Slide } from './ImageSlider.styles';

const ImageSlider = ({ data, slideTime, link }) => {
  const [swiper, updateSwiper] = useState(null);

  useEffect(() => () => {
    clearInterval(interval);
  });

  const nextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const interval = setInterval(nextSlide, slideTime);

  const images = data
    .filter(item => {
      if (item.backdrop_path || item.file_path) return item;
    })
    .map(({ title, vote_average, backdrop_path, file_path, id }) => (
      <Slide style={{ position: 'relative' }} key={id || file_path}>
        {link && (
          <Link to={`/movie/${id}`}>
            <ImageOverlay />
            <OverlayContent>
              <h1>{title}</h1>
              <div style={{ marginLeft: '20px' }}>
                <i style={{ color: 'red' }} className='fas fa-heart' />{' '}
                {vote_average * 10} %
              </div>
            </OverlayContent>

            <BackgroundImage
              style={{
                background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path ||
                  file_path}`}) center top / cover no-repeat`
              }}
            />
          </Link>
        )}
        <BackgroundImage
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original${backdrop_path ||
              file_path}`}) center top / cover no-repeat`
          }}
        />
      </Slide>
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
