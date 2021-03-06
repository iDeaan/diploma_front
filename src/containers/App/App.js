import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { provideHooks } from 'redial';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import qs from 'qs';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import { logout as logoutAction, signIn } from 'redux/modules/user';
import { Notifs } from 'components';
import config from 'config';

const isSimpleUser = user => user && user.role === null;
const isAdvetiser = user => user && user.role === 'advetiser';

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (
      __CLIENT__
      && localStorage
      && localStorage.getItem('login')
      && localStorage.getItem('password')
      && localStorage.getItem('login') !== null
      && localStorage.getItem('password') !== null
    ) {
      await dispatch(signIn(localStorage.getItem('login'), localStorage.getItem('password')));
    }
    if (!isAuthLoaded(getState())) {
      await dispatch(loadAuth()).catch(() => null);
    }
    if (!isInfoLoaded(getState())) {
      await dispatch(loadInfo()).catch(() => null);
    }
  }
})
@connect(
  state => ({
    notifs: state.notifs,
    user: state.user.data.user
  }),
  { logout: logoutAction, pushState: push }
)
@withRouter
class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: null
  };

  state = {
    user: this.props.user, // eslint-disable-line react/destructuring-assignment
    prevProps: this.props // eslint-disable-line react/no-unused-state
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { prevProps } = state;
    // Compare the incoming prop to previous prop
    const user = !_.isEqual(prevProps.user, props.user) ? props.user : state.user;

    if (!prevProps.user && props.user) {
      const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
      props.pushState(query.redirect || '/login-success');
    } else if (prevProps.user && !props.user) {
      // logout
      props.pushState('/');
    }

    return {
      user,
      // Store the previous props in state
      prevProps: props
    };
  }

  handleLogout = event => {
    const { logout } = this.props;

    event.preventDefault();
    logout();
  };

  render() {
    const { notifs, route } = this.props;
    const { user } = this.state;
    console.log('user', user);
    const styles = require('./App.scss');
    require('./App.scss');
    return (
      <div className={`${styles.app} global-app-container`} id="app-container">
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to="/">
                <div>
                  <i className={`fa fa-ravelry ${styles.logo}`} />
                  <span className="logo-text">{config.app.title}</span>
                </div>
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              {user
                && false && (
                <LinkContainer to="/chat">
                  <NavItem eventKey={1}>Chat</NavItem>
                </LinkContainer>
              )}
              {isSimpleUser(user) && (
                <LinkContainer to="/interests">
                  <NavItem eventKey={2}>Інтереси</NavItem>
                </LinkContainer>
              )}
              {isSimpleUser(user) && (
                <LinkContainer to="/recommendations">
                  <NavItem eventKey={2}>Рекомендації</NavItem>
                </LinkContainer>
              )}
              {isAdvetiser(user) && (
                <LinkContainer to="/recommendations">
                  <NavItem eventKey={2}>&nbsp;</NavItem>
                </LinkContainer>
              )}
              {/*
                <LinkContainer to="/widgets">
                  <NavItem eventKey={2}>Widgets</NavItem>
                </LinkContainer>
                <LinkContainer to="/survey">
                  <NavItem eventKey={3}>Survey</NavItem>
                </LinkContainer>
                <LinkContainer to="/pagination">
                  <NavItem eventKey={4}>Pagination</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                  <NavItem eventKey={5}>About Us</NavItem>
                </LinkContainer>
              */}
            </Nav>

            <Nav navbar pullRight>
              {!user && (
                <LinkContainer to="/login" className="login-links">
                  <NavItem eventKey={6}>
                    <i className="fa fa-sign-in" />
                    <span>Увійти</span>
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/profile/general" className="login-links">
                  <NavItem eventKey={7} className="logout-link">
                    <span className="right">Мій профіль</span>
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/logout" className="login-links">
                  <NavItem eventKey={7} className="logout-link" onClick={this.handleLogout}>
                    <span className="right">
                      <strong>{user.login}</strong>
                    </span>
                    <i className="fa fa-sign-out" />
                  </NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global && (
            <div className="container">
              <Notifs
                className={styles.notifs}
                namespace="global"
                NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
              />
            </div>
          )}

          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
