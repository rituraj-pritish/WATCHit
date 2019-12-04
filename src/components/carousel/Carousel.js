import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Carousel.css';
import {
  CarouselImage,
  CarouselItemContainer,
  CarouselCard,
  ImageContainer
} from './Carousel.styles';
import { StyledLink } from '../../index.styles';

const Carousel = ({ data, mediaType, carouselTitle }) => {
  const params = {
    slidesPerView: 2,
    breakpoints: {
      1250: {
        slidesPerView: 7
      },
      1050: {
        slidesPerView: 6
      },
      860: {
        slidesPerView: 5
      },
      670: {
        slidesPerView: 4
      },
      400: {
        slidesPerView: 3
      }
    },
    loop: true,
    spaceBetween: 20,
    containerClass: 'custom-swiper-container-corousel',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  const slides = data.map(({ poster_path, profile_path, id, name, title,media_type }) => (
    <CarouselItemContainer key={id}>
      <StyledLink to={`/${mediaType ? mediaType : media_type}/${id}`}>
        <ImageContainer>
          <CarouselImage
            style={{
              background: `url(${`https://image.tmdb.org/t/p/original${
                poster_path ? poster_path : profile_path
              }`}) center center / cover no-repeat `
            }}
          />
        </ImageContainer>

        {name || title}
      </StyledLink>
    </CarouselItemContainer>
  ));

  return (
    <CarouselCard>
      <h3>{carouselTitle}</h3>
      <Swiper {...params}>{slides}</Swiper>
    </CarouselCard>
  );
};

export default Carousel;
