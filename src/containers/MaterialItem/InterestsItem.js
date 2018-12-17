import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { push } from 'react-router-redux';
import { getMaterialById as GMByID } from 'redux/modules/material';

import CommentsList from './CommentsList';

const commentsList = [
  {
    name: 'Volodymyr',
    date: '15 November 2019',
    title: 'Крутий фільм!',
    text: 'Кращий фільм, що я бачив!!!',
    rating: 5
  },
  {
    name: 'Russell_',
    date: '12 September 2005',
    title: 'Не можна пропустити!',
    text: 'Справді кращий фільм',
    rating: 4.8
  }
];

@connect(
  state => ({
    currentMaterial: state.material.currentMaterial
  }),
  { getMaterialById: GMByID }
)
@withRouter
class InterestsItem extends Component {
  static propTypes = {
    getMaterialById: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    currentMaterial: PropTypes.object
  };

  static defaultProps = {
    currentMaterial: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;

    const { getMaterialById } = this.props;
    getMaterialById(params.id);
  }

  render() {
    const { currentMaterial } = this.props;
    require('./InterestsItem.scss');
    console.log('currentMaterial', currentMaterial);
    return (
      <div className="container interests-item-page-container">
        <Helmet title="Home" />
        <div className="interest-title">
          <h1 className="page-title">{currentMaterial.title}</h1>
        </div>
        <div className="interest-description">
          <div className="images">
            <div className="main-image">
              <img src={currentMaterial.image} alt="main" />
            </div>
          </div>
          <div className="full-description">
            <div className="content">{currentMaterial.description}</div>
            <div className="description-rating">
              <Rating
                initialRating={currentMaterial.mark}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
              <div className="voted">(12320)</div>
            </div>
            <div className="custom-rating">
              <div className="title">Ви ще не проголосували:</div>
              <div className="rating-form">
                <Rating initialRating={3} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
                <div className="submit">
                  <button className="btn btn-success">Проголосувати</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentsList comments={commentsList} />
      </div>
    );
  }
}

export default InterestsItem;
