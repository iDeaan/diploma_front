import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

require('./ProfileGeneralInformation.scss');

const menuList = [
  {
    title: 'Загальна інформація',
    value: 'general',
    href: '/profile/general'
  },
  {
    title: 'Інтереси',
    value: 'interests',
    href: '/profile/interests'
  },
  {
    title: 'Статистика інтересів та класів',
    value: 'statistics',
    role: 'advetiser',
    href: '/profile/statistics'
  },
  {
    title: 'Управління рекламою',
    value: 'advetisments',
    role: 'advetiser',
    href: '/profile/advetisments'
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
                <LinkContainer to={item.href} className="login-links">
                  <div className={`menu-item section-item-container ${item.value === 'general' && 'active'}`}>
                    {item.title}
                  </div>
                </LinkContainer>
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
