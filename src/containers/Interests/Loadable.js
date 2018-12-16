import React from 'react';
import Loadable from 'react-loadable';

const CatalogFeathersLoadable = Loadable({
  loader: () => import('./Catalog' /* webpackChunkName: 'chat' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default CatalogFeathersLoadable;
