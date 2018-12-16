import React from 'react';
import Loadable from 'react-loadable';

const RegistrationLoadable = Loadable({
  loader: () => import('./Registration' /* webpackChunkName: 'login' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default RegistrationLoadable;
