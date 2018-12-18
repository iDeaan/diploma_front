import React from 'react';
import Loadable from 'react-loadable';

const ProfileInterestsStatisticsFeathersLoadable = Loadable({
  loader: () => import('./ProfileInterestsStatistics' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileInterestsStatisticsFeathersLoadable;
