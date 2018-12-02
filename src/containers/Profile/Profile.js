import React, { Component } from 'react';
import Helmet from 'react-helmet';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import RecommendationItem from './InterestItem';

const musicImage = require('./music.jpg');
const travellingImage = require('./travelling.jpg');
const crosswordsImage = require('./crosswords.jpeg');

const BI = require('../Catalog/books.jpg');
const FI = require('../Catalog/film.jpg');
const MI = require('../Catalog/music.jpeg');

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
    image: travellingImage,
  },
  {
    id: 3,
    title: 'Кросворди',
    image: crosswordsImage,
  },
];

require('./Profile.scss');

const menuList = [
  {
    title: 'Загальна інформація',
    value: 'general'
  },
  {
    title: 'Зацікавлення',
    value: 'interests'
  }
];

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'general',
      isSubmitting: false,
    };
  }

  render() {
    const { selectedTab, isSubmitting } = this.state;

    return (
      <div className="container profile-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">
          Мій профіль
        </h1>
        <div className="profile-page-content">
          <div className="profile-menu">
            {menuList.map(item => (
              <div
                className={`menu-item section-item-container ${item.value === selectedTab && 'active'}`}
                onClick={() => this.setState({ selectedTab: item.value })}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="profile-content">
            {{
              interests: (
                <div className="recommendations-catalog">
                  {recommendationItems.map(recommendationItem => (
                    <RecommendationItem recommendationInformation={recommendationItem} />
                  ))}
                </div>
              ),
              general: (
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
              )
            }[selectedTab]}
          </div>
        </div>
      </div>
    );
  }
}

// export default Catalog;
