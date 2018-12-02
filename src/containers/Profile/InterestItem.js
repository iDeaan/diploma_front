import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

@withRouter
class ClassItem extends PureComponent {
  static propTypes = {
    recommendationInformation: PropTypes.object,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    recommendationInformation: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isDescriptionShowed: false
    };
  }

  handleClick() {
    const { history } = this.props;
    history.push({
      pathname: '/catalog/1'
    });
  }

  render() {
    const { recommendationInformation } = this.props;
    const { isDescriptionShowed } = this.state;
    console.log('recommendationInformation.description', recommendationInformation.description);
    require('./InterestItem.scss');
    return [
      <div
        className="recommendation-item-container section-item-container"
      >
        <div className="image-container">
          <div className="image" style={{ backgroundImage: `url(${recommendationInformation.image})` }} />
        </div>
        <div className="content">
          <div className="header">
            <div className="title">{recommendationInformation.title}</div>
          </div>
          <div className="vote">
            <div className="text">Вам цікава дана тема ?</div>
            <i className={`fa ${recommendationInformation.liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'} fa-2x`} />
          </div>
          <div className="body">
            <div
              className="show-more"
              onClick={() => this.setState({ isDescriptionShowed: !isDescriptionShowed })}
            >
              {isDescriptionShowed
                ? 'Приховати повний опис інтересу'
                : 'Показати повний опис інтересу'
              }
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
