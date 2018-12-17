import React from 'react';
import Loadable from 'react-loadable';

const ProfileAdvetismentsFeathersLoadable = Loadable({
  loader: () => import('./ProfileAdvetisments' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileAdvetismentsFeathersLoadable;
