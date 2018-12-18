import React from 'react';
import Loadable from 'react-loadable';

const ProfileAdvetismentCreateFeathersLoadable = Loadable({
  loader: () => import('./ProfileAdvetismentsCreate' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileAdvetismentCreateFeathersLoadable;
