import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassItem extends Component {
  static propTypes = {
    createUserInterest: PropTypes.func.isRequired,
    deleteUserInterest: PropTypes.func.isRequired,
    getInterestsListById: PropTypes.func.isRequired,
    recommendationInformation: PropTypes.object,
    user: PropTypes.object
  };

  static defaultProps = {
    recommendationInformation: {},
    user: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isDescriptionShowed: false
    };
  }

  handleLikeClick() {
    const {
      user,
      createUserInterest,
      deleteUserInterest,
      recommendationInformation,
      getInterestsListById
    } = this.props;

    const currentFunction = recommendationInformation.liked ? deleteUserInterest : createUserInterest;
    currentFunction(user.id, recommendationInformation.id).then(() => {
      getInterestsListById(user.id);
    });
  }

  render() {
    const { recommendationInformation } = this.props;
    const { isDescriptionShowed } = this.state;
    require('./InterestItem.scss');
    return [
      <div className="recommendation-item-container section-item-container">
        <div className="image-container">
          <div className="image" style={{ backgroundImage: `url(${recommendationInformation.image})` }} />
        </div>
        <div className="content">
          <div className="header">
            <div className="title">{recommendationInformation.title}</div>
          </div>
          <div className="vote">
            <div className="text">Вам {recommendationInformation.liked ? 'true' : 'false'} цікава дана тема 1? </div>
            <i
              className={`fa ${recommendationInformation.liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'} fa-2x`}
              onClick={() => this.handleLikeClick()}
            />
          </div>
          <div className="body">
            <div className="show-more" onClick={() => this.setState({ isDescriptionShowed: !isDescriptionShowed })}>
              {isDescriptionShowed ? 'Приховати повний опис інтересу' : 'Показати повний опис інтересу'}
            </div>
          </div>
        </div>
      </div>,
      <div
        className={`recommendation-item-description section-item-container ${!isDescriptionShowed && 'hide'}`}
        dangerouslySetInnerHTML={{
          __html: recommendationInformation.description
        }}
      />
    ];
  }
}

export default ClassItem;
