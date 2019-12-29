import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import ReactTooltip from 'react-tooltip';

import './Carousel.css';
import {
  CarouselImage,
  CarouselItemContainer,
  CarouselCard,
  ImageContainer,
  Rating,
  Add,
  Added
} from './Carousel.styles';
import { StyledLink } from '../../index.styles';
import {
  openModal,
  setAlert,
  toggleWatchlist
} from '../../actions/userActions';

const Carousel = ({
  data,
  mediaType,
  carouselTitle,
  openModal,
  setAlert,
  auth,
  user,
  toggleWatchlist
}) => {
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

  const handleAdd = async (media_type, media_id, watchlist, media) => {
    if (auth.isAuth) {
      toggleWatchlist(user.user.id, { media_type, media_id, watchlist }, media);
    } else {
      setAlert('Login to continue', 'error');
    }
  };

  const slides = data.map(item => {
    const {
      poster_path,
      profile_path,
      id,
      name,
      title,
      vote_average,
      media_type
    } = item;
    mediaType = media_type || mediaType;
    let inWatchlist;
    if (mediaType === 'movie' && user.watchlist.movie) {
      inWatchlist = user.watchlist.movie.find(item => item.id === id);
    }

    if (mediaType === 'tv' && user.watchlist.tv) {
      inWatchlist = user.watchlist.tv.find(item => item.id === id);
    }

    return (
      <CarouselItemContainer key={id}>
        {(mediaType === 'movie' || mediaType === 'tv') && (
          <>
            <Added
              show={inWatchlist}
              data-tip='Added To Watchlist, Click to remove'
              onClick={() => handleAdd(mediaType, id, false, item)}
            >
              <i className='fas fa-check' />
            </Added>
            <Add
              show={!inWatchlist}
              data-tip='Add To Watchlist'
              onClick={() => handleAdd(mediaType, id, true, item)}
            >
              <i className='fas fa-plus' />
            </Add>
          </>
        )}
        <StyledLink to={`/${mediaType || media_type}/${id}`}>
          <ImageContainer>
            {vote_average > 0 && (
              <Rating>
                <i className='fas fa-star' /> {vote_average}
              </Rating>
            )}

            <CarouselImage
              style={{
                background: `url(${`https://image.tmdb.org/t/p/original${
                  poster_path ? poster_path : profile_path
                }`}) center center / cover no-repeat `
              }}
            />
          </ImageContainer>
          <p style={{margin: 0, fontSize: '1.5rem', marginTop: '-2px'}}>{name || title}</p>
        </StyledLink>
      </CarouselItemContainer>
    );
  });

  return (
    <CarouselCard>
      <ReactTooltip />
      <h3>{carouselTitle}</h3>
      <Swiper {...params}>{slides}</Swiper>
    </CarouselCard>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  { openModal, setAlert, toggleWatchlist }
)(Carousel);
