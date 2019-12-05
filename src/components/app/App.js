import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../../actions/moviesActions';
import { getSession } from '../../actions/authActions';
import { AppContainer, Global } from './App.styles';
import theme from '../../theme';

import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import Loader from '../loader/Loader';
import MovieDetails from '../movie/MovieDetails';
import PersonDetails from '../person/PersonDetails';
import TVDetails from '../tv/TVDetails';
import SearchResult from '../search-result/SearchResult';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';
import Discover from '../discover/Discover';

const App = ({ movies, auth, getSession, fetchNowPlayingMovies }) => {
  useEffect(() => {
    fetchNowPlayingMovies();
    getSession();
  }, [fetchNowPlayingMovies]);

  if (movies.loading || auth.loading) return <Loader />;
  console.log(process.env.NODE_ENV);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Fragment>
        <Router>
          <NavBar />
          <AppContainer>
            <Switch>
              <Route exact path='/movie/:movie_id' component={MovieDetails} />
              <Route exact path='/tv/:tv_id' component={TVDetails} />
              <Route
                exact
                path='/person/:person_id'
                component={PersonDetails}
              />
              <Route
                exact
                path='/search/:search_query'
                component={SearchResult}
              />
              <Route exact path='/discover' component={Discover} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route path='/' component={Home} />
            </Switch>
          </AppContainer>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchNowPlayingMovies, getSession }
)(App);
