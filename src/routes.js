import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from 'containers';
import About from 'containers/About/Loadable';
import Chat from 'containers/Chat/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import Registration from 'containers/Registration/Loadable';
import Catalog from 'containers/Interests/Loadable';
import ClassCatalog from 'containers/ClassCatalog/Loadable';
import InterestsItem from 'containers/MaterialItem/Loadable';
import Reccomendations from 'containers/Reccomendations/Loadable';
import ProfileGeneralInformation from 'containers/ProfileGeneralInformation/Loadable';
import ProfileInterests from 'containers/ProfileInterests/Loadable';
import ProfileAdvetisments from 'containers/ProfileAdvetisments/Loadable';
import ProfileAdvetismentItem from 'containers/ProfileAdvetismentItem/Loadable';
import ProfileStatisticsAge from 'containers/ProfileStatisticsAge/Loadable';
// import Profile from 'containers/Profile/Loadable';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user.data.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.user.data.user === null,
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
      { path: '/material/:id', component: isAuthenticated(InterestsItem) },
      { path: '/interests/:id', component: isAuthenticated(ClassCatalog) },
      { path: '/interests', component: isAuthenticated(Catalog) },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { path: '/recommendations', component: Reccomendations },
      { path: '/profile/interests', component: ProfileInterests },
      { path: '/profile/general', component: ProfileGeneralInformation },
      { path: '/profile/statistics/age', component: ProfileStatisticsAge },
      { path: '/profile/advetisments/:id', component: ProfileAdvetismentItem },
      { path: '/profile/advetisments', component: ProfileAdvetisments },
      // { path: '/profile', component: Profile },
      { component: NotFound }
    ]
  }
];

export default routes;
