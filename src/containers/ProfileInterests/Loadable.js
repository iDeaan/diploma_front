import React from 'react';
import Loadable from 'react-loadable';

const ProfileInterestsFeathersLoadable = Loadable({
  loader: () => import('./ProfileInterests' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileInterestsFeathersLoadable;
