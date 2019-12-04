import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPerson } from '../../actions/personActions';

import Loader from '../loader/Loader';
import {
  Icon,
  Overview,
  DetailsOverviewContainer,
  Rating,
  Poster,
  MovieDetailsContainer,
  BackdropContainer
} from './PersonDetails.styles';

import Carousel from '../carousel/Carousel';
import Backdrop from '../backdrop/Backdrop';

const PersonDetails = ({ match, getPerson, person }) => {
  useEffect(() => {
    getPerson(match.params.person_id);
  }, []);
  console.log(person);

  if (!person.current || person.loading) return <Loader />;
  console.log(person.current);

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    tagline,
    runtime,
    vote_count,
    vote_average,
    videos,
    tagged_images,
    images,
    combined_credits: { cast }
  } = person.current;

  const starredIn = cast
    .filter(({ media_type }) => media_type === 'movie' || media_type === 'tv')
    .sort((a, b) => b.popularity - a.popularity)
    .filter((item, idx) => idx < 20);
  return (
    <div>
      <BackdropContainer>
        <Backdrop
          backdrop_path={tagged_images.results[0].file_path}
          poster_path={poster_path}
          overview={overview}
          vote_average={vote_average}
        />
      </BackdropContainer>
      <Carousel carouselTitle='Starred In' data={starredIn} />
    </div>
  );
};

const mapStateToProps = state => ({
  person: state.person
});

export default connect(
  mapStateToProps,
  { getPerson }
)(PersonDetails);
