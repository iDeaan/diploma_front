import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

class ClassItem extends PureComponent {
  static propTypes = {
    classInformation: PropTypes.object
  };

  static defaultProps = {
    classInformation: {}
  };

  render() {
    const { classInformation } = this.props;
    require('./ClassItem.scss');
    return (
      <div className="class-catalog-item-container">
        <div className="image">
          <img src={classInformation.image} alt="class information" />
        </div>
        {!classInformation.isBanner && (
          <div className="description">
            <div className="title">{classInformation.title}</div>
            <div className="rating">
              <Rating
                initialRating={classInformation.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
              <div className="voted">Voted: {classInformation.voted}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ClassItem;
