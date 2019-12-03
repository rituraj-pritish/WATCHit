import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import mdb from '../../movieDB/mdb'
import {
  Navbar,
  RoundedInput,
  StyledLink,
  LeftContainer,
  RightContainer,
  RoundedButton,
  Logo
} from './NavBar.styles';
import {fetchSearchQuery} from '../../actions/moviesActions'
import {login,logout} from '../../actions/authActions'

const NavBar = ({history,movies,fetchSearchQuery,login,logout,auth}) => {
  const [search, setSearch] = useState(movies.search.query || '');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetchSearchQuery(search)
    history.push(`/search/${search}`)
  }

  const handleLogin = async () => {

  }

  return (
    <Navbar>
      <LeftContainer>
        <Logo to='/'>toWATCH</Logo>
      </LeftContainer>

      <form onSubmit={handleSubmit}>
        <RoundedInput
          type='text'
          name='search'
          onChange={handleChange}
          placeholder='Search Movies, TV Shows, Cast'
          value={search}
        />
        <RoundedButton bg='#99f2c8' >Search</RoundedButton>
      </form>

      <RightContainer>
        {auth.isAuth ?
        <StyledLink onClick={logout} to='/'>Logout</StyledLink> :
        <StyledLink onClick={login} to='/'>Login</StyledLink> 
        }
      </RightContainer>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  auth: state.auth
})

const navbar = connect(mapStateToProps,{fetchSearchQuery,login,logout})(NavBar)

export default withRouter(navbar);