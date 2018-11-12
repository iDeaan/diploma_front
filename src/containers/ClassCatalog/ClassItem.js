import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
              {/* <Rating initialRating={classInformation.rating} /> */}
            </div>
            <div className="description">{classInformation.description}</div>
            <div className="count">Items number: <span>{classInformation.count}</span></div>
          </div>
        )}
      </div>
    );
  }
}

export default ClassItem;
