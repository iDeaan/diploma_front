import React from 'react';
import Helmet from 'react-helmet';
import ClassItem from './ClassItem';

const booksImage = require('./books.jpg');
const filmsImage = require('./film.jpg');
const musicImage = require('./music.jpeg');
const musicBannerImage = require('./banner_image.jpg');
const filmBannerImage = require('./film_banner.jpg');
const bookBannerImage = require('./book_banner.jpg');

const catalogItems = [
  {
    id: 1,
    title: 'Книги',
    image: booksImage,
    count: 100323,
    description: 'Каталог книг, що мають різні жанри. Просто прочитай їх!!!'
  },
  {
    id: 2,
    title: 'Фільми',
    image: filmsImage,
    count: 32133,
    description: 'Каталог фільмів, що мають різні жанри. Просто переглянь їх!!!'
  },
  {
    id: 3,
    title: 'Музика',
    image: musicImage,
    count: 2343,
    description: 'Каталог пісень, що мають різні жанри. Просто послухай їх!!!'
  },
  {
    title: 'Music',
    image: bookBannerImage,
    count: 2343,
    isBanner: true,
    description: 'List of music that have different types. Just listen to it!!!'
  },
  {
    title: 'Music',
    image: filmBannerImage,
    count: 2343,
    isBanner: true,
    description: 'List of music that have different types. Just listen to it!!!'
  },
  {
    title: 'Music',
    image: musicBannerImage,
    count: 2343,
    isBanner: true,
    description: 'List of music that have different types. Just listen to it!!!'
  }
];

require('./Catalog.scss');

const Catalog = () => (
  <div className="container catalog-page-container">
    <Helmet title="Home" />
    <h1 className="page-title">Наявні інтереси</h1>
    <div className="classes-catalog">
      {catalogItems.map(catalogItem => (
        <ClassItem classInformation={catalogItem} />
      ))}
    </div>
  </div>
);

export default Catalog;
