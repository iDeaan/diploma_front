import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { push } from 'react-router-redux';
import { getCurrentInterest as GCI } from 'redux/modules/interests';

import ClassItem from './ClassItem';

@connect(
  state => ({
    currentInterest: state.interests.currentInterest
  }),
  { getCurrentInterest: GCI }
)
@withRouter
class ClassCatalog extends Component {
  static propTypes = {
    getCurrentInterest: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    currentInterest: PropTypes.object
  };

  static defaultProps = {
    currentInterest: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;

    const { getCurrentInterest } = this.props;
    getCurrentInterest(params.id);
  }

  render() {
    const { currentInterest } = this.props;

    require('./ClassCatalog.scss');
    return (
      <div className="container class-catalog-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Каталог "{currentInterest.title}"</h1>
        <div className="classes-catalog">
          {currentInterest.materials && currentInterest.materials.length ? (
            currentInterest.materials.map(catalogItem => <ClassItem classInformation={catalogItem} />)
          ) : (
            <h2>На даний момент не має жодного запису в поточному каталозі</h2>
          )}
        </div>
      </div>
    );
  }
}

export default ClassCatalog;
