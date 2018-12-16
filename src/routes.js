import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from 'containers';
import About from 'containers/About/Loadable';
import Chat from 'containers/Chat/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import Registration from 'containers/Registration/Loadable';
import Catalog from 'containers/Catalog/Loadable';
import ClassCatalog from 'containers/ClassCatalog/Loadable';
import InterestsItem from 'containers/InterestsItem/Loadable';
import Reccomendations from 'containers/Reccomendations/Loadable';
import Profile from 'containers/Profile/Loadable';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { path: '/chat', component: Chat },
      { path: '/login', component: Login },
      { path: '/registration', component: Registration },
      { path: '/item/:id', component: isAuthenticated(InterestsItem) },
      { path: '/catalog/:id', component: isAuthenticated(ClassCatalog) },
      { path: '/catalog', component: isAuthenticated(Catalog) },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { path: '/recommendations', component: Reccomendations },
      { path: '/profile', component: Profile },
      { component: NotFound }
    ]
  }
];

export default routes;
