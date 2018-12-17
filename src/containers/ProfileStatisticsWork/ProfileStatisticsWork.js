import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ReactChartkick, { PieChart, ColumnChart } from 'react-chartkick';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router';

ReactChartkick.addAdapter(Chart);

require('./ProfileStatisticsWork.scss');

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

@connect(state => ({
  user: state.user.data.user
}))
@withRouter
class ProfileStatisticsWork extends Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.object
  };

  static defaultProps = {
    user: {}
  };

  handleChange = event => {
    const { history } = this.props;
    history.push(`/profile/statistics/${event.target.value}`);
  };

  render() {
    const { user } = this.props;

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
                <div className={`menu-item section-item-container ${item.value === 'statistics' && 'active'}`}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="profile-content">
            <div className="statistics-container section-item-container">
              <div className="section-main-title">Статистика для інтересу "Книги"</div>
              <div className="select-data">
                <div className="key">Оберіть графік</div>
                <div className="value">
                  <select onChange={this.handleChange}>
                    <option value="age">Графік розподілу людей за віком</option>
                    <option value="gender">Графік розподілу людей за статтю</option>
                    <option value="work">Графік розподілу людей за роботою</option>
                    <option value="status">Графік розподілу людей за шлюбним статусом</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'none' }}>
                <PieChart data={[['Чоловіки', 39], ['Жінки', 61]]} />
                <PieChart data={[['Не в стосунках', 24], ['В стосунках', 76]]} />

                <PieChart
                  data={[
                    ['Безробітні', 12],
                    ['Викладачі', 44],
                    ['ІТ-сфера', 21],
                    ['Таксит', 7],
                    ['Лікар', 13],
                    ['Спортсмен', 3]
                  ]}
                />
              </div>
              <ColumnChart
                data={[['10-20', 11], ['20-30', 34], ['30-40', 27], ['40-50', 12], ['50-60', 16], ['70-80', 0]]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileStatisticsWork;
