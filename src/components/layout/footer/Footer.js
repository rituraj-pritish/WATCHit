import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterContainer,
  TmdbLogo,
  Copyright,
  SocialIcon,
  Icons,
  TmdbDetails,
  BigLinks,
  FooterMiddle,
  MaxWidthContainer
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <MaxWidthContainer>
        <BigLinks>
          <Link to='/discover/movies'>Movies</Link>

          <Link to='/discover/tv-shows'>TV Shows</Link>
        </BigLinks>

        <FooterMiddle>
          <div style={{ fontSize: '40px' }}>
            <Link to='/home'>WATCHit</Link>
          </div>

          <TmdbDetails>
            <a
              href='https://www.themoviedb.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TmdbLogo src={require('./tmdb.png')} alt='powered by tmdb' />
            </a>

            <Icons>
              <a
                href='https://twitter.com/themoviedb'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SocialIcon className='fab fa-twitter' />
              </a>
              <a
                href='https://facebook.com/themoviedb'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SocialIcon className='fab fa-facebook' />
              </a>
            </Icons>
          </TmdbDetails>
        </FooterMiddle>

        <Copyright>&copy; {new Date().getFullYear()} WATCHit</Copyright>
      </MaxWidthContainer>
    </FooterContainer>
  );
};

export default Footer;
