import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../../actions/moviesActions';
import {getSession} from '../../actions/authActions'
import { AppContainer, Global } from './App.styles';

import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Loader from '../loader/Loader';
import Movie from '../movie/Movie';
import SearchResult from '../search-result/SearchResult';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';

const App = ({ movies,auth,getSession, fetchNowPlayingMovies }) => {
  useEffect(() => {
    fetchNowPlayingMovies();
    getSession()
  }, [fetchNowPlayingMovies]);

  if (movies.loading || auth.loading) return <Loader />;

  return (
    <Fragment>
      <Global />
      <Router>
        <NavBar />
        <AppContainer>
          <Switch>
            <Route exact path='/movie/:movie_id' component={Movie} />
            <Route
              exact
              path='/search/:search_query'
              component={SearchResult}
            />
            <PrivateRoute
              exact
              path='/dashboard'
              component={Dashboard}
            />
            <Route path='/' component={Home} />
          </Switch>
        </AppContainer>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchNowPlayingMovies,getSession }
)(App);
