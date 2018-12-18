import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

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

const adsList = [
  {
    id: 1,
    name: 'Знижки на книги 50%',
    status: 'Активний',
    beginDate: '21/12/2018',
    endDate: '31/12/2018',
    viewsNumber: 10,
    clicksNumber: 3
  },
  {
    id: 2,
    name: 'Відкриття нового магазину!!!',
    status: 'Не активний',
    beginDate: '19/12/2018',
    endDate: '21/12/2018',
    viewsNumber: 4,
    clicksNumber: 4
  }
];

@connect(state => ({
  user: state.user.data.user
}))
@withRouter
class ProfileGeneralInformation extends Component {
  static propTypes = {
    user: PropTypes.object,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    match: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static defaultProps = {
    user: {}
  };

  render() {
    const { user, history, match } = this.props;
    const { params } = match;

    require('./ProfileAdvetismentItem.scss');
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
            <div className="statistics-container section-item-container">
              <div className="section-main-title">Рекламні матераіли для поточного інтересу</div>
              <div className="advetisments-table">
                <table style={{ width: '100%' }}>
                  <tr>
                    <th>№</th>
                    <th>Назва</th>
                    <th>Статус</th>
                    <th>Дата початку</th>
                    <th>Дата кінця</th>
                    <th>Переглядів</th>
                    <th>Кліків</th>
                  </tr>
                  {adsList.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.beginDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.viewsNumber}</td>
                      <td>{item.clicksNumber}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <button
                className="btn btn-success"
                style={{ marginTop: '20px' }}
                onClick={() => history.push(`/profile/advetisments/${params.id}/create`)}
              >
                <i className="fa fa-add" />
                Створити новий рекламний об'єкт
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileGeneralInformation;
