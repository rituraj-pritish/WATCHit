import React, { useState } from 'react';
import { connect } from 'react-redux';

import List from '../../list/List';
import { Tab } from './Watchlist.styles';
import Page from '../../ui/Page'

const Watchlist = ({ user: { watchlist } }) => {
  const [activeTab, setActiveTab] = useState('movie');
  return (
    <Page>
      <h2 style={{ display: 'inline-block', marginRight: '50px' }}>
        My Watchlist
      </h2>
      <Tab active={activeTab === 'movie'} onClick={() => setActiveTab('movie')}>
        Movies
      </Tab>{' '}
      <h2 style={{ display: 'inline-block' }}>|</h2>{' '}
      <Tab active={activeTab === 'tv'} onClick={() => setActiveTab('tv')}>
        TV Shows
      </Tab>
      <List
        dataType='watchlist'
        data={activeTab === 'movie' ? watchlist.movie : watchlist.tv}
      />
    </Page>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Watchlist);
