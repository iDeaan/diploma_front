import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

ReactChartkick.addAdapter(Chart);

require('./ProfileStatisticsStatus.scss');

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
class ProfileStatisticsStatus extends Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    match: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  static defaultProps = {
    user: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      statistics: {}
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;

    fetch(`http://localhost:3030/users_statistics?interestId=${params.id}&dataType=status`)
      .then(response => response.json())
      .then(response => {
        this.setState({ statistics: response.data });
      });
  }

  handleChange = event => {
    const { history, match } = this.props;
    const { params } = match;
    history.push(`/profile/statistics/${params.id}/${event.target.value}`);
  };

  render() {
    const { user } = this.props;

    const { statistics } = this.state;

    const statData = [];
    if (statistics && statistics.items) {
      statistics.items.forEach(item => {
        statData.push([item.title, item.count]);
      });
    }
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
              <div className="section-main-title">Статистика для інтересу "Книги"</div>
              <div className="select-data">
                <div className="key">Оберіть графік</div>
                <div className="value">
                  <select onChange={this.handleChange} value="status">
                    <option value="age">Графік розподілу людей за віком</option>
                    <option value="gender">Графік розподілу людей за статтю</option>
                    <option value="work">Графік розподілу людей за роботою</option>
                    <option value="status">Графік розподілу людей за шлюбним статусом</option>
                  </select>
                </div>
              </div>
              <PieChart data={statData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileStatisticsStatus;
