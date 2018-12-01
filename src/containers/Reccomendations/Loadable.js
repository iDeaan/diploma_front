import React from 'react';
import Loadable from 'react-loadable';

const ReccomendationsFeathersLoadable = Loadable({
  loader: () => import('./Reccomendations' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ReccomendationsFeathersLoadable;
