import React from 'react';
import Loadable from 'react-loadable';

const ProfileStatisticsStatusFeathersLoadable = Loadable({
  loader: () => import('./ProfileStatisticsStatus' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileStatisticsStatusFeathersLoadable;
