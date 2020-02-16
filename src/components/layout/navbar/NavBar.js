import React, { useState, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Navbar,
  RoundedInput,
  StyledLink,
  LeftContainer,
  RoundedButton,
  Logo,
  SmallLogo,
  Form,
  IconButton,
  UserIcon,
  MaxWidthContainer,
  IconLinks
} from './NavBar.styles';
import { fetchSearchQuery } from '../../../actions/moviesActions';
import { login, logout } from '../../../actions/authActions';
import SideBar from '../side-bar/SideBar';
import ProfileOptions from '../profile-options/ProfileOptions';
import HomeIcon from '../../../assets/HomeIcon';

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

  return (
    <Navbar>
      <MaxWidthContainer>
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

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconLinks>
            <Link to='/'>
              <HomeIcon />
            </Link>
          </IconLinks>
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
        </div>

        {showOptions && (
          <ProfileOptions setShow={toggleOptions} profileIcon={profileIcon} />
        )}
      </MaxWidthContainer>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth
});

const navbar = connect(mapStateToProps, { fetchSearchQuery, login, logout })(
  NavBar
);

export default withRouter(navbar);
