import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { getUsersAdd as GUD } from 'redux/modules/advetisments';
import { getInterests as GI } from 'redux/modules/interests';

require('./ProfileInterestsStatistics.scss');

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
    getInterests: GI
  }
)
@withRouter
class ProfileInterestsStatistics extends Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    getUserAdd: PropTypes.func.isRequired,
    getInterests: PropTypes.func.isRequired,
    user: PropTypes.object,
    interests: PropTypes.array
  };

  static defaultProps = {
    user: {},
    interests: []
  };

  componentDidMount() {
    const { user, getUserAdd, getInterests } = this.props;
    getUserAdd(user.id).then(response => {
      const advetiserInterests = response.data[0].advetiser_interests;
      const interestsIds = advetiserInterests && advetiserInterests.length ? advetiserInterests.map(item => item.interest_id) : [];
      return getInterests(interestsIds);
    });
  }

  render() {
    const { user, interests, history } = this.props;
    require('./ProfileInterestsStatistics.scss');
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
                  <div className={`menu-item section-item-container ${item.value === 'statistics' && 'active'}`}>
                    {item.title}
                  </div>
                </LinkContainer>
              );
            })}
          </div>
          <div className="profile-content">
            <div className="statistics-container section-item-container">
              <div className="section-main-title">Список інтересів до яких ви маєте доступ</div>
              <div className="advetisments-table">
                <table style={{ width: '100%' }}>
                  <tr>
                    <th>№</th>
                    <th>Назва</th>
                    <th>Кількість матеріалів</th>
                    <th>Зображення</th>
                    <th />
                  </tr>
                  {interests.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.materials_number}</td>
                      <td width="100px">
                        <img style={{ width: '75px' }} src={item.image} alt="materials" />
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => history.push({
                            pathname: `/profile/statistics/${item.id}/age`
                          })
                          }
                        >
                          Перейти до інтересу
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInterestsStatistics;
