import React from 'react';

import { FooterContainer, TmdbLogo } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} WATCHit
      <a
        href='https://www.themoviedb.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TmdbLogo src={require('./tmdb.png')} alt='powered by tmdb' />
      </a>
    </FooterContainer>
  );
};

export default Footer;
