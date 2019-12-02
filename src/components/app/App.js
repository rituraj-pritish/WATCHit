import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import {fetchNowPlayingMovies} from '../../actions/moviesActions'

import { AppContainer, Global } from './App.styles';
import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Loader from '../loader/Loader';

// axios.defaults.params['api_key'] = 'c4e5e25acde2c068be87859f63627ded'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGU1ZTI1YWNkZTJjMDY4YmU4Nzg1OWY2MzYyN2RlZCIsInN1YiI6IjVkNmJkNjVlNjU2ODZlMDAwZjg4YTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lHzZBeDfWZQahz9tDFjKZfGdo2EbdrZiEC6AcOcnXuU ',
    'Content-Type': 'application/json'
  }
});

// c4e5e25acde2c068be87859f63627ded
const App = ({movies,fetchNowPlayingMovies}) => {

  useEffect(() => {
    fetchNowPlayingMovies()
  },[fetchNowPlayingMovies])

  if(movies.loading) return <Loader/>

  return (
    <Fragment>
      <Global />
      <Router>
        <NavBar />
        <AppContainer>
          <Home />
          app
        </AppContainer>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps,{fetchNowPlayingMovies})(App);
