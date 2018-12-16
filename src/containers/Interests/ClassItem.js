import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
      pathname: `/interests/${classInformation.id}`
    });
  }

  render() {
    const { classInformation } = this.props;
    require('./ClassItem.scss');
    return (
      <div
        className={`class-item-container ${classInformation && classInformation.isBanner ? 'add-vertical' : ''}`}
        onClick={() => this.handleClick()}
        onKeyPress={() => this.handleClick()}
      >
        <div className="image" style={{ backgroundImage: `url(${classInformation.image})` }} />
        {!classInformation.isBanner && (
          <div className="description">
            <div className="title">{classInformation.title}</div>
            <div className="description">{classInformation.description}</div>
            <div className="count">
              Кількість матеріалів: <span>{classInformation.materials_number}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ClassItem;