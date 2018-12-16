import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';
import FacebookLogin from 'components/FacebookLogin/FacebookLogin';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import * as userActions from 'redux/modules/user';

@connect(
  state => ({ user: state.auth.user }),
  { ...notifActions, ...authActions, ...userActions }
)
@withRouter
class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object
  };

  onFacebookLogin = async (err, data) => {
    if (err) return;

    const { login, history } = this.props;

    try {
      await login('facebook', data);
      this.successLogin();
    } catch (error) {
      if (error.message === 'Incomplete oauth registration') {
        history.push({
          pathname: '/register',
          state: { oauth: error.data }
        });
      } else {
        throw error;
      }
    }
  };

  onLocalLogin = async data => {
    const { signIn, history } = this.props;

    signIn(data.email, data.password).then(() => {
      history.push('/interests');
    });
  };

  successLogin = () => {
    const { notifSend } = this.props;

    notifSend({
      message: "You're logged in now !",
      kind: 'success',
      dismissAfter: 2000
    });
  };

  FacebookLoginButton = ({ facebookLogin }) => (
    <button type="button" className="btn btn-primary" onClick={facebookLogin}>
      Login with <i className="fa fa-facebook-f" />
    </button>
  );

  render() {
    const { user, logout, history } = this.props;
    require('./Login.scss');
    return (
      <div className="container login-container">
        <div className="tabs">
          <div className="tab active">Авторизація</div>
          <div className="tab" onClick={() => history.push('/registration')}>
            Реєстрація
          </div>
        </div>
        <div>
          <Helmet title="Login" />
          {!user && (
            <div>
              <LoginForm onSubmit={this.onLocalLogin} />
              <div className="facebook-login section-item-container form-section">
                <div className="fb-text">Ви також можете авторизуватись через свій акаунт Facebook</div>
                <FacebookLogin
                  appId="389251578512583"
                  /* autoLoad={true} */
                  fields="name,email,picture"
                  onLogin={this.onFacebookLogin}
                  component={this.FacebookLoginButton}
                />
              </div>
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

export default Login;
