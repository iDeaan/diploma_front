import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

require('./ProfileGeneralInformation.scss');

const menuList = [
  {
    title: 'Загальна інформація',
    value: 'general'
  },
  {
    title: 'Інтереси',
    value: 'interests'
  },
  {
    title: 'Статистика інтересів та класів',
    value: 'statistics',
    role: 'advetiser'
  },
  {
    title: 'Управління рекламою',
    value: 'advetisments',
    role: 'advetiser'
  }
];

@connect(state => ({
  user: state.user.data.user
}))
@withRouter
class ProfileGeneralInformation extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: {}
  };

  render() {
    const { user } = this.props;
    console.log('=> user', user);
    require('./ProfileGeneralInformation.scss');
    return (
      <div className="container profile-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Мій профіль</h1>
        <div className="profile-page-content">
          <div className="profile-menu">
            {menuList.map(item => {
              if (item.role && item.role !== user.role) {
                return '';
              }
              return (
                <div className={`menu-item section-item-container ${item.value === 'general' && 'active'}`}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="profile-content">
            <div className="registration-form">
              <RegistrationForm
                submitButtonName="Редагувати"
                submitButtonIcon="fa-edit"
                isSubmitting
                initialValues={user}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileGeneralInformation;
