import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPerson, removeCurrentPerson } from '../../../actions/personActions';

import Loader from '../../loader/Loader';
import {
  Icon,
  DetailsOverviewContainer,
  Rating,
  Poster,
  PersonDetailsContainer,
  BackdropContainer
} from './PersonDetails.styles';
import { Divider } from '../../../index.styles';

import Carousel from '../../carousel/Carousel';
import Backdrop from '../../backdrop/Backdrop';
import ImageSlider from '../../image-slider/ImageSlider';
import Overview from '../../overview/Overview';

const PersonDetails = ({ match, getPerson, person, removeCurrentPerson }) => {
  useEffect(() => {
    getPerson(match.params.person_id);

    return () => {
      removeCurrentPerson();
    };
  }, [match.params.person_id]);

  if (!person.current || person.loading) return <Loader />;

  const {
    name,
    biography,
    profile_path,
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
      <ImageSlider
        data={
          tagged_images.results.length > 0
            ? tagged_images.results
            : images.profiles
        }
        slideTime={5000}
      />
      <PersonDetailsContainer>
        <Overview
          title={name}
          overview={biography}
          poster_path={profile_path}
        />
        <Carousel carouselTitle='Starred In' data={starredIn} />
      </PersonDetailsContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  person: state.person
});

export default connect(
  mapStateToProps,
  { getPerson, removeCurrentPerson }
)(PersonDetails);
