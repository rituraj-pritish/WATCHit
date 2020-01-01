import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPerson, removeCurrentPerson } from '../../../actions/personActions';

import Loader from '../../loader/Loader';
import { Container } from '../../../index.styles';

import Carousel from '../../carousel/Carousel';
import ImageSlider from '../../image-slider/ImageSlider';
import Overview from '../../overview/Overview';

const PersonDetails = ({ match, getPerson, person, removeCurrentPerson }) => {
  useEffect(() => {
    getPerson(match.params.person_id);
    window.scrollTo(0, 0);

    return () => {
      removeCurrentPerson();
    };
  }, [match.params.person_id]);

  if (!person.current || person.loading) return <Loader />;

  const {
    name,
    biography,
    profile_path,
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
      <Container>
        <Overview
          title={name}
          overview={biography}
          poster_path={profile_path}
        />
        <Carousel carouselTitle='Starred In' data={starredIn} />
      </Container>
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
