import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Tab } from './Favourites.styles';
import { Container } from '../../../index.styles';
import List from '../../list/List';

const Favourites = ({ user: { favourite } }) => {
  const [activeTab, setActiveTab] = useState('movie');

  return (
    <Container>
      <h2 style={{ display: 'inline-block', marginRight: '50px' }}>
        My Favourites
      </h2>
      <Tab active={activeTab === 'movie'} onClick={() => setActiveTab('movie')}>
        Movies
      </Tab>{' '}
      <h2 style={{ display: 'inline-block' }}>|</h2>{' '}
      <Tab active={activeTab === 'tv'} onClick={() => setActiveTab('tv')}>
        TV Shows
      </Tab>
      <List
        dataType='favourite'
        data={activeTab === 'movie' ? favourite.movie : favourite.tv}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Favourites);
