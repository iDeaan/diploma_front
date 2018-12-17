import React from 'react';
import Loadable from 'react-loadable';

const ProfileAdvetismentItemFeathersLoadable = Loadable({
  loader: () => import('./ProfileAdvetismentItem' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileAdvetismentItemFeathersLoadable;
