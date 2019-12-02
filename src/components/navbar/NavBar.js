import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  RoundedInput,
  LinkContainer,
  StyledLink,
  LeftContainer,
  RightContainer,
  Logo
} from './NavBar.styles';

const NavBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    setSearch('')
  }
  return (
    <Navbar>
      <LeftContainer>
        <Logo to='/home'>toWATCH</Logo>
      </LeftContainer>

      <form onSubmit={handleSubmit}>
        <RoundedInput
          type='text'
          name='search'
          onChange={handleChange}
          placeholder='Search Movies'
          value={search}
        />
      </form>

      <RightContainer>
        <StyledLink to='/'>Link</StyledLink>
      </RightContainer>
    </Navbar>
  );
};

export default NavBar;
