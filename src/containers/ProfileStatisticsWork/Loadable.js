import React from 'react';
import Loadable from 'react-loadable';

const ProfileStatisticsWorkFeathersLoadable = Loadable({
  loader: () => import('./ProfileStatisticsWork' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileStatisticsWorkFeathersLoadable;
