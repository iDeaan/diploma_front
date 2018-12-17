import React from 'react';
import Loadable from 'react-loadable';

const ProfileStatisticsAgeFeathersLoadable = Loadable({
  loader: () => import('./ProfileStatisticsAge' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileStatisticsAgeFeathersLoadable;
