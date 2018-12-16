import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getInterests as GI } from 'redux/modules/interests';

import ClassItem from './ClassItem';

@connect(
  state => ({
    interests: state.interests.data
  }),
  { getInterests: GI }
)
@withRouter
class Catalog extends Component {
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
    require('./Catalog.scss');
    return (
      <div className="container catalog-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Наявні інтереси</h1>
        <div className="classes-catalog">
          {interests.map(interest => (
            <ClassItem classInformation={interest} />
          ))}
        </div>
      </div>
    );
  }
}

export default Catalog;
