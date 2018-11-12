import React from 'react';
import Helmet from 'react-helmet';
import ClassItem from './ClassItem';

const catalogItems = [
  {
    id: 1,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1cENmAtYsL._RI_.jpg',
    voted: 1220,
    rating: 5
  },
  {
    id: 2,
    title: 'Gladiator',
    image: 'https://i.pinimg.com/originals/44/31/bd/4431bd4cc9381ba8fe482e83367f3a49.jpg',
    voted: 12320,
    rating: 4.4
  },
  {
    id: 3,
    title: 'Avatar',
    image: 'http://cafmp.com/wp-content/uploads/2012/11/Avatar.jpg',
    voted: 12420,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Braveheart',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Braveheart_imp.jpg/220px-Braveheart_imp.jpg',
    voted: 12250,
    rating: 4
  },
  {
    id: 5,
    title: 'Jaws',
    image:
      'https://vignette.wikia.nocookie.net/jaws/images/d/da/Jaws-movie-poster.jpg/revision/latest?cb=20131015071208',
    voted: 1245,
    rating: 4
  },
  {
    id: 6,
    title: 'Jurassic park',
    image: 'https://static.tvgcdn.net/feed/1/62/thumbs/117994062_1300x1733.jpg',
    voted: 1220,
    rating: 5
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1cENmAtYsL._RI_.jpg',
    voted: 1220,
    rating: 5
  },
];

require('./ClassCatalog.scss');


const ClassCatalog = () => (
  <div className="container class-catalog-page-container">
    <Helmet title="Home" />
    <h1>
      Films Catalog
    </h1>
    <div className="classes-catalog">
      {catalogItems.map(catalogItem => (
        <ClassItem classInformation={catalogItem} />
      ))}
    </div>
  </div>
);

export default ClassCatalog;
