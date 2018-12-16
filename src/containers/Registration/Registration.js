import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import * as usersActions from 'redux/modules/user';

@connect(
  state => ({ user: state.auth.user }),
  { ...notifActions, ...authActions, ...usersActions }
)
@withRouter
class Registration extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    logout: PropTypes.func.isRequired,
    registerNewUser: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object
  };

  onRegistrationClick = async data => {
    const { registerNewUser, history } = this.props;
    registerNewUser(data).then(() => {
      history.push('/login');
    });
  };

  render() {
    const { user, logout, history } = this.props;
    require('./Registration.scss');
    return (
      <div className="container registration-container con-item">
        <div className="tabs">
          <div className="tab" onClick={() => history.push('/login')}>
            Авторизація
          </div>
          <div className="tab active">Реєстрація</div>
        </div>
        <div>
          <Helmet title="Registration" />
          {!user && (
            <div>
              <RegistrationForm onSubmit={this.onRegistrationClick} />
            </div>
          )}
          {user && (
            <div>
              <p>
                You are currently logged in as
                {user.email}.
              </p>

              <div>
                <button type="button" className="btn btn-danger" onClick={logout}>
                  <i className="fa fa-sign-out" /> Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Registration;
