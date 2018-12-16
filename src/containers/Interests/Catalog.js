import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getInterestsListById as GIIds, getInterests as GI } from 'redux/modules/interests';

import ClassItem from './ClassItem';

@connect(
  state => ({
    interests: state.interests.data,
    user: state.user.data.user
  }),
  {
    getInterests: GI,
    getInterestsListById: GIIds
  }
)
@withRouter
class Catalog extends Component {
  static propTypes = {
    getInterests: PropTypes.func.isRequired,
    getInterestsListById: PropTypes.func.isRequired,
    interests: PropTypes.array,
    user: PropTypes.array
  };

  static defaultProps = {
    interests: [],
    user: {}
  };

  componentDidMount() {
    const { getInterests, getInterestsListById, user } = this.props;
    getInterestsListById(user.id).then(response => {
      const idsList = response.data.map(item => item.interest_id);
      getInterests(idsList);
    });
  }

  render() {
    const { interests } = this.props;
    require('./Catalog.scss');
    return (
      <div className="container catalog-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Наявні інтереси</h1>
        <div className="classes-catalog">
          {interests && interests.length ? interests.map(interest => <ClassItem classInformation={interest} />) : ''}
        </div>
      </div>
    );
  }
}

export default Catalog;
