import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Page from '../../ui/Page';
import { removeSearchResults } from '../../../actions/moviesActions';
import {
  Grid,
  Poster,
  PosterDetails,
  PosterContainer,
  StyledLink
} from './SearchResult.styles';
import Loader from '../../loader/Loader';

const SearchResult = ({ match, movies }) => {
  useEffect(
    () => () => {
      removeSearchResults();
    },
    []
  );
  if (movies.loading || !movies.search.results) return <Loader />;

  if (movies.search.results.length === 0)
    return <Page>No results found :(</Page>;

  const results = movies.search.results.map(
    ({
      poster_path,
      profile_path,
      title,
      release_date,
      name,
      vote_average,
      media_type,
      id
    }) => {
      if (!poster_path && !profile_path) return null;
      const releaseYear = release_date
        ? `(${release_date.split('-')[0]})`
        : null;

      return (
        <PosterContainer key={id}>
          <StyledLink to={`/${media_type}/${id}`}>
            <Poster
              style={{
                background: `url(${`https://image.tmdb.org/t/p/original${
                  poster_path ? poster_path : profile_path
                }`}) center top / cover no-repeat `
              }}
            />
            <PosterDetails>
              {title || name} {releaseYear}
            </PosterDetails>
          </StyledLink>
        </PosterContainer>
      );
    }
  );

  return (
    <Page>
      <Grid>{results.map(item => item)}</Grid>
    </Page>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps, { removeSearchResults })(SearchResult);
