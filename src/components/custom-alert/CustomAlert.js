import React from 'react';
import { connect } from 'react-redux';
import { Alert, CloseIcon, AlertsContainer } from './CustomAlert.styles';
import { removeAlert } from '../../actions/userActions';

const CustomAlert = ({ alerts, removeAlert }) => {
  if (alerts.length === 0) return null;

  const alert = alerts.map(({ alert, type, id }) => {
    switch (type) {
      case 'error':
        return (
          <Alert key={id} color='#ea4040'>
            {alert}
            <CloseIcon
              onClick={() => removeAlert(id)}
              className='fas fa-times'
            />
          </Alert>
        );
      case 'success':
        return (
          <Alert key={id} color='#68bd3e'>
            {alert}
            <CloseIcon
              onClick={() => removeAlert(id)}
              className='fas fa-times'
            />
          </Alert>
        );
      case 'info':
        return (
          <Alert key={id} color='#5476dc'>
            {alert}
            <CloseIcon
              onClick={() => removeAlert(id)}
              className='fas fa-times'
            />
          </Alert>
        );
      default:
        return (
          <Alert key={id} color='#e6ea4b'>
            {alert}
            <CloseIcon
              onClick={() => removeAlert(id)}
              className='fas fa-times'
            />
          </Alert>
        );
    }
  });

  return <AlertsContainer>{alert}</AlertsContainer>;
};

const mapStateToProps = state => ({
  alerts: state.user.alerts
});

export default connect(
  mapStateToProps,
  { removeAlert }
)(CustomAlert);
