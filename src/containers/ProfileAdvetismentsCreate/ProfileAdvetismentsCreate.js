import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { getUsersAdd as GUD, createNewAdd as CNA } from 'redux/modules/advetisments';
import { getInterests as GI } from 'redux/modules/interests';
import AddForm from 'components/AddForm/AddForm';

require('./ProfileAdvetisments.scss');

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

@connect(
  state => ({
    user: state.user.data.user,
    interests: state.interests.data,
    addInterests: state.advetisments.addInterests
  }),
  {
    getUserAdd: GUD,
    getInterests: GI,
    createNewAdd: CNA
  }
)
@withRouter
class ProfileAdvetismentsCreate extends Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    getUserAdd: PropTypes.func.isRequired,
    getInterests: PropTypes.func.isRequired,
    createNewAdd: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  static defaultProps = {
    user: {}
  };

  componentDidMount() {
    const { user, getUserAdd, getInterests } = this.props;
    getUserAdd(user.id).then(response => {
      const advetiserInterests = response.data[0].advetiser_interests;
      const interestsIds = advetiserInterests && advetiserInterests.length ? advetiserInterests.map(item => item.interest_id) : [];
      return getInterests(interestsIds);
    });
  }

  handleFormSubmit(data) {
    const { createNewAdd, match, history } = this.props;
    const { params } = match;
    createNewAdd(data).then(() => {
      history.push(`/profile/advetisments/${params.id}`);
    });
  }

  render() {
    const { user, match } = this.props;
    const { params } = match;

    require('./ProfileAdvetisments.scss');
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
                  <div className={`menu-item section-item-container ${item.value === 'advetisments' && 'active'}`}>
                    {item.title}
                  </div>
                </LinkContainer>
              );
            })}
          </div>
          <div className="profile-content">
            <div className="statistics-container section-item-container add-adv-container">
              <div className="section-main-title">Створення рекламного матеріалу</div>
              <AddForm
                submitButtonName="Створити новий рекламний матеріал"
                submitButtonIcon="fa-save"
                onSubmit={vals => this.handleFormSubmit(vals)}
                initialValues={{
                  interest_id: params.id,
                  advetiser_id: user.id
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAdvetismentsCreate;
