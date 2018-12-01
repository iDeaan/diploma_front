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
    title: 'Books',
    image: booksImage,
    count: 100323,
    description: 'List of books that have different types. Just read it!!!'
  },
  {
    id: 2,
    title: 'Films',
    image: filmsImage,
    count: 32133,
    description: 'List of films that have different types. Just watch it!!!'
  },
  {
    id: 3,
    title: 'Music',
    image: musicImage,
    count: 2343,
    description: 'List of music that have different types. Just listen to it!!!'
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
  },
];

require('./Catalog.scss');

const Catalog = () => (
  <div className="container catalog-page-container">
    <Helmet title="Home" />
    <h1 className="page-title">
      Available materials
    </h1>
    <div className="classes-catalog">
      {catalogItems.map(catalogItem => (
        <ClassItem classInformation={catalogItem} />
      ))}
    </div>
  </div>
);

export default Catalog;
