import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { handleAddClick as addClick } from 'redux/modules/advetisments';

@connect(
  null,
  {
    handleAddClick: addClick
  }
)
@withRouter
class ClassItem extends PureComponent {
  static propTypes = {
    classInformation: PropTypes.object,
    handleAddClick: PropTypes.func.isRequired,
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

  handleAddClick(event, id) {
    const { handleAddClick } = this.props;
    event.stopPropagation();
    handleAddClick(id);
  }

  render() {
    const { classInformation } = this.props;
    const { advetisments } = classInformation;
    require('./ClassItem.scss');
    return (
      <div
        className={`class-item-container ${
          classInformation && classInformation.advetisments && classInformation.advetisments.length ? 'with-add' : ''
        }`}
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
            {classInformation && classInformation.advetisments && advetisments.length ? (
              <a
                className="add-data"
                onClick={event => this.handleAddClick(event, advetisments[0].id)}
                href={advetisments[0].link_to}
                target="_blank"
              >
                <div className="add-image">
                  <img src={advetisments[0].image} alt="add" />
                </div>
                <div className="text">{advetisments[0].title}</div>
              </a>
            ) : (
              ''
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ClassItem;
