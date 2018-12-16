import React, { Component } from 'react';
import Helmet from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import AddForm from 'components/AddForm/AddForm';

import ReactChartkick, {
// LineChart,
  PieChart,
  ColumnChart
  // BarChart,
  // AreaChart,
  // ScatterChart
} from 'react-chartkick';
import Chart from 'chart.js';
import RecommendationItem from './InterestItem';

ReactChartkick.addAdapter(Chart);

const musicImage = require('./music.jpg');
const travellingImage = require('./travelling.jpg');
const crosswordsImage = require('./crosswords.jpeg');

const BI = require('../Interests/books.jpg');
const FI = require('../Interests/film.jpg');
const MI = require('../Interests/music.jpeg');

const recommendationItems = [
  {
    id: 1,
    title: 'Книги',
    image: BI,
    liked: true,
    percentage: 83
  },
  {
    id: 1,
    title: 'Фільми',
    image: FI,
    liked: true,
    percentage: 83
  },
  {
    id: 1,
    title: 'Музика',
    image: MI,
    liked: true,
    percentage: 83
  },
  {
    id: 1,
    title: 'Музичні інструменти',
    image: musicImage,
    liked: true,
    percentage: 83
  },
  {
    id: 2,
    title: 'Подорожі',
    image: travellingImage
  },
  {
    id: 3,
    title: 'Кросворди',
    image: crosswordsImage
  }
];

require('./Profile.scss');

const menuList = [
  {
    title: 'Загальна інформація',
    value: 'general'
  },
  {
    title: 'Інтереси',
    value: 'interests',
    role: 'user'
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

// const data = [
//   {"name":"Workout", "data": {"2017-01-01": 3, "2017-01-02": 4}},
//   {"name":"Call parents", "data": {"2017-01-01": 5, "2017-01-02": 3}}
// ];

const adsList = [
  {
    id: 1,
    name: 'Знижки на книги 50%',
    status: 'Активний',
    beginDate: '21/12/2018',
    endDate: '31/12/2018',
    viewsNumber: 321,
    clicksNumber: 90
  },
  {
    id: 2,
    name: 'Відкриття нового магазину!!!',
    status: 'Не активний',
    beginDate: '19/12/2018',
    endDate: '21/12/2018',
    viewsNumber: 141,
    clicksNumber: 54
  }
];

const role = 'advetiser';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'advetismentCreate',
      isSubmitting: false,
      selectedStatistics: 'gender'
    };
  }

  handleChange(event) {
    this.setState({ selectedStatistics: event.target.value });
  }

  render() {
    const { selectedTab, isSubmitting, selectedStatistics } = this.state;
    require('./Profile.scss');
    console.log('selectedStatistics', selectedStatistics);
    return (
      <div className="container profile-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Мій профіль</h1>
        <div className="profile-page-content">
          <div className="profile-menu">
            {menuList.map(item => {
              if (item.role && item.role !== role) {
                return '';
              }
              return (
                <div
                  className={`menu-item section-item-container ${item.value === selectedTab && 'active'}`}
                  onClick={() => this.setState({ selectedTab: item.value })}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="profile-content">
            {
              {
                interests: (
                  <div className="recommendations-catalog">
                    {recommendationItems.map(recommendationItem => (
                      <RecommendationItem recommendationInformation={recommendationItem} />
                    ))}
                  </div>
                ),
                general: (
                  <div className="registration-form">
                    <RegistrationForm
                      submitButtonName="Редагувати"
                      submitButtonIcon="fa-edit"
                      isSubmitting={isSubmitting}
                      initialValues={{
                        name: 'Володимир',
                        age: 22,
                        login: 'vhorobiuk',
                        email: 'volodia.gp@gmail.com'
                      }}
                    />
                  </div>
                ),
                statistics: (
                  <div className="statistics-container section-item-container">
                    <div className="section-main-title">Статистика для інтересу "Книги"</div>
                    <div className="select-data">
                      <div className="key">Оберіть графік</div>
                      <div className="value">
                        <select>
                          <option>Графік розподілу людей за віком</option>
                          <option>Графік розподілу людей за статтю</option>
                          <option>Графік розподілу людей за роботою</option>

                          <option>Графік розподілу людей за шлюбним статусом</option>
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
                ),
                advetisments: (
                  <div className="statistics-container section-item-container">
                    <div className="section-main-title">Рекламні матераіли для інтересу "Книги"</div>
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
                      onClick={() => this.setState({ selectedTab: 'advetismentCreate' })}
                    >
                      <i className="fa fa-add" />
                      Створити новий рекламний об'єкт
                    </button>
                  </div>
                ),
                advetismentCreate: (
                  <div className="statistics-container section-item-container add-adv-container">
                    <div className="section-main-title">Створення рекламного матеріалу</div>
                    <AddForm submitButtonName="Створити новий рекламний матеріал" submitButtonIcon="fa-save" />
                  </div>
                )
              }[selectedTab]
            }

            {/* <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />*/}

            {/* <ColumnChart data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]} /> */}
            {/* <BarChart data={[["Work", 32], ["Play", 1492]]} /> */}
            {/* <AreaChart data={{"2017-01-01": 11, "2017-01-02": 6}} /> */}
            {/* <ScatterChart data={[[174.0, 80.0], [176.5, 82.3]]} xtitle="Size" ytitle="Population" /> */}
            {/* <LineChart data={data} /> */}
          </div>
        </div>
      </div>
    );
  }
}

// export default Interests;
