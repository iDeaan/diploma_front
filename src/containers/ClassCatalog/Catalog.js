import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { push } from 'react-router-redux';
import { getInterests as GI } from 'redux/modules/interests';

import ClassItem from './ClassItem';

@connect(
  state => ({
    interests: state.interests.data
  }),
  { getInterests: GI }
)
@withRouter
class ClassCatalog extends Component {
  static propTypes = {
    getInterests: PropTypes.func.isRequired,
    interests: PropTypes.array
  };

  static defaultProps = {
    interests: []
  };

  componentDidMount() {
    const { getInterests } = this.props;
    getInterests();
  }

  render() {
    const { interests } = this.props;
    console.log('interests', interests);
    const catalogItems = [];
    require('./ClassCatalog.scss');
    return (
      <div className="container class-catalog-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Каталог фільмів</h1>
        <div className="classes-catalog">
          {catalogItems.map(catalogItem => (
            <ClassItem classInformation={catalogItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default ClassCatalog;
