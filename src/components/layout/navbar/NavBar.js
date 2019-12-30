import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Navbar,
  RoundedInput,
  StyledLink,
  LeftContainer,
  RightContainer,
  RoundedButton,
  Logo,
  SmallLogo,
  Form,
  IconButton,
  UserIcon
} from './NavBar.styles';
import { fetchSearchQuery } from '../../../actions/moviesActions';
import { login, logout } from '../../../actions/authActions';
import SideBar from '../side-bar/SideBar';
import ProfileOptions from '../profile-options/ProfileOptions';

const NavBar = ({ history, movies, fetchSearchQuery, login, logout, auth }) => {
  const [search, setSearch] = useState(movies.search.query || '');
  const [showSidebar, toggleShowSidebar] = useState(false);
  const [showOptions, toggleOptions] = useState(false);
  const profileIcon = useRef();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchSearchQuery(search);
    setSearch('');
    history.push(`/search/${search}`);
  };

  const handleProfileClick = e => {
    toggleOptions(!showOptions);
  };

  //todo logout function
  return (
    <Navbar>
      <LeftContainer>
        <SideBar open={showSidebar} setOpen={toggleShowSidebar} />
        <Logo to='/'>WATCHit</Logo>
        <SmallLogo to='/'>Wit</SmallLogo>
      </LeftContainer>

      <Form onSubmit={handleSubmit}>
        <RoundedInput
          type='text'
          name='search'
          onChange={handleChange}
          placeholder='Search Movies, TV Shows, Cast'
          value={search}
        />
        <RoundedButton bg='#99f2c8'>Search </RoundedButton>
        <IconButton bg='#99f2c8'>
          <i className='fas fa-search' />
        </IconButton>
      </Form>

      <RightContainer>
        {auth.isAuth ? (
          <UserIcon
            ref={profileIcon}
            className='profile fas fa-user-circle'
            onClick={handleProfileClick}
          />
        ) : (
          <StyledLink onClick={login} to='/'>
            Login
          </StyledLink>
        )}
      </RightContainer>
      {showOptions && (
        <ProfileOptions setShow={toggleOptions} profileIcon={profileIcon} />
      )}
    </Navbar>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth
});

const navbar = connect(
  mapStateToProps,
  { fetchSearchQuery, login, logout }
)(NavBar);

export default withRouter(navbar);
