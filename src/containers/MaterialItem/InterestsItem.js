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
    text: 'Кращий історичний фільм, що я бачив!!!',
    rating: 5
  },
  {
    name: 'Russell_',
    date: '12 September 2005',
    title: 'Не можна пропустити!',
    text:
      '"Gladiator" definitely is a classic film as it combines a simple, but moving, story with beautiful scenery,'
      + ' filming, direction and score  it is truly a "complete" movie.\n'
      + 'I am mostly compelled with the beautiful script which in a way reminds me of poetry, though it is still '
      + 'everyday language. I love the acting portrayed by the late Oliver Reed and also Richard Harris.'
      + 'Russell Crowe, Djimon Housou and Joaquin Phoenix are also superb and the parts suit them perfectly.'
      + 'There are also a number of less "popular" artists who also deserve a big "bravo". Amongst them I have to'
      + ' mention ex-Mr Universe Ralph Moeller who is mostly used as the comic relief of the movie. In Gladiator we ca'
      + 'n also the beautiful and popular Maltese TV Star and actress Ruth Frendo, who although has a small part, she i'
      + 's totally brilliant and outstanding.',
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
