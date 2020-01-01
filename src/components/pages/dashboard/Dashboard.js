import React from 'react';
import { connect } from 'react-redux';

import { getSession } from '../../../actions/authActions';
import Loader from '../../loader/Loader';

const Dashboard = ({ getSession, auth, user }) => {
  if (auth.loading || user.loading) return <Loader />;

  return (
    <div>
      Dashboard
      {user.user && user.user.name}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getSession }
)(Dashboard);
