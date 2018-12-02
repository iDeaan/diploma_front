import React from 'react';
import Loadable from 'react-loadable';

const ProfileFeathersLoadable = Loadable({
  loader: () => import('./Profile' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileFeathersLoadable;
