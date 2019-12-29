import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  closeModal,
  getUser,
  fetchWatchlists,
  fetchFavourites
} from '../../actions/userActions';
import {
  fetchNowPlayingMovies,
  discoverMovies
} from '../../actions/moviesActions';
import { getSession } from '../../actions/authActions';
import { AppContainer, Global } from './App.styles';
import theme from '../../theme';
import { discoverTv } from '../../actions/tvActions';

import NavBar from '../layout/navbar/NavBar';
import Home from '../pages/home/Home';
import Loader from '../loader/Loader';
import MovieDetails from '../pages/movie/MovieDetails';
import PersonDetails from '../pages/person/PersonDetails';
import TVDetails from '../pages/tv/TVDetails';
import SearchResult from '../pages/search-result/SearchResult';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';
import Discover from '../pages/discover/Discover';
import Movies from '../pages/movies/Movies';
import TVShows from '../pages/tv-shows/TVShows';
import Persons from '../pages/persons/Persons';
import Footer from '../layout/footer/Footer';
import PlaylistModal from '../playlist-modal/PlaylistModal';
import CustomAlert from '../custom-alert/CustomAlert';
import Watchlist from '../pages/watchlist/Watchlist';
import Favourites from '../pages/favourites/Favourites';

const App = ({
  movies,
  auth,
  user,
  getSession,
  fetchNowPlayingMovies,
  fetchWatchlists,
  fetchFavourites,
  getUser,
  discoverMovies,
  discoverTv,
  closeModal
}) => {
  useEffect(() => {
    fetchNowPlayingMovies();
    discoverMovies();
    discoverTv();
    getSession();
  }, [fetchNowPlayingMovies, discoverMovies, discoverTv, getSession]);

  useEffect(() => {
    if (auth.isAuth && user.user) {
      fetchWatchlists(user.user.id);
      fetchFavourites(user.user.id);
    }
  }, [user.user]);

  if (movies.loading || auth.loading) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <Global/>
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
              <Route exact path='/discover/movies' component={Movies} />
              <Route exact path='/discover/tv-shows' component={TVShows} />
              <Route exact path='/discover/persons' component={Persons} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/user/watchlist'
                component={Watchlist}
              />
              <PrivateRoute
                exact
                path='/user/favourites'
                component={Favourites}
              />
              <Route path='/' component={Home} />
            </Switch>
          </AppContainer>
          <PlaylistModal open={user.modalOpen} closeModal={closeModal} />
          <Footer />
        </Router>
        <CustomAlert />
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    fetchNowPlayingMovies,
    getSession,
    getUser,
    closeModal,
    fetchWatchlists,
    fetchFavourites,
    discoverMovies,
    discoverTv
  }
)(App);
