import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {
  getInterestsListById as GIById,
  getFullInterests as GI,
  createUserInterest as CUI,
  deleteUserInterest as DUI
} from 'redux/modules/interests';
import RecommendationItem from './InterestItem';

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
    href: '/profile/statistics/age'
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
    full: state.interests.full,
    userInterests: state.interests.data
  }),
  {
    getInterestsListById: GIById,
    getFullInterests: GI,
    createUserInterest: CUI,
    deleteUserInterest: DUI
  }
)
@withRouter
class ProfileInterests extends Component {
  static propTypes = {
    user: PropTypes.object,
    full: PropTypes.array,
    userInterests: PropTypes.array,
    getInterestsListById: PropTypes.func.isRequired,
    createUserInterest: PropTypes.func.isRequired,
    deleteUserInterest: PropTypes.func.isRequired,
    getFullInterests: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: {},
    userInterests: [],
    full: []
  };

  componentDidMount() {
    const { user, getFullInterests, getInterestsListById } = this.props;
    getFullInterests().then(() => {
      getInterestsListById(user.id);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { userInterests } = this.props;
    const { userInterests: nextUI } = nextProps;

    if (userInterests !== nextUI) {
      this.forceUpdate();
    }
  }

  render() {
    const {
      user, userInterests, createUserInterest, deleteUserInterest, full, getInterestsListById
    } = this.props;
    const resultInterests = [
      ...full
        .map(item => {
          const currentUserInterest = userInterests.find(uInterest => uInterest.interest_id === item.id);
          item.liked = !!currentUserInterest;
          return item;
        })
        .sort((first, second) => second.liked - first.liked)
    ];
    require('./ProfileInterests.scss');
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
                  <div className={`menu-item section-item-container ${item.value === 'interests' && 'active'}`}>
                    {item.title}
                  </div>
                </LinkContainer>
              );
            })}
          </div>
          <div className="profile-content">
            <div className="recommendations-catalog">
              {resultInterests && resultInterests.length
                ? resultInterests.map(interest => (
                  <RecommendationItem
                    user={user}
                    getInterestsListById={getInterestsListById}
                    createUserInterest={createUserInterest}
                    deleteUserInterest={deleteUserInterest}
                    recommendationInformation={interest}
                  />
                ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInterests;
