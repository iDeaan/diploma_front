import React from 'react';
import Loadable from 'react-loadable';

const ProfileStatisticsGenderFeathersLoadable = Loadable({
  loader: () => import('./ProfileStatisticsGender' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileStatisticsGenderFeathersLoadable;
