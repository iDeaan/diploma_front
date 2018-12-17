import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { withRouter } from 'react-router';

@withRouter
class ClassItem extends PureComponent {
  static propTypes = {
    classInformation: PropTypes.object,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    classInformation: {}
  };

  handleClick() {
    const { history, classInformation } = this.props;
    history.push({
      pathname: `/material/${classInformation.id}`
    });
  }

  render() {
    const { classInformation } = this.props;
    require('./ClassItem.scss');
    return (
      <div className="class-catalog-item-container" onClick={() => this.handleClick()}>
        <div className="image">
          <img src={classInformation.image} alt="class information" />
        </div>
        {!classInformation.isBanner && (
          <div className="description">
            <div className="title">{classInformation.title}</div>
            <div className="rating">
              <Rating
                initialRating={classInformation.mark}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
              <div className="voted">Проголосовано: {classInformation.voted}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ClassItem;
