import React from 'react';
import Loadable from 'react-loadable';

const ProfileGeneralInformationFeathersLoadable = Loadable({
  loader: () => import('./ProfileGeneralInformation' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileGeneralInformationFeathersLoadable;
