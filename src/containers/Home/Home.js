import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { CounterButton, GithubButton } from 'components';
// import config from 'config';
import Helmet from 'react-helmet';
// import { connect } from 'react-redux';

const offersList = [
  'перегляд каталогу цікавої інформації',
  'отримання рекомендацій щодо нових інтересів',
  'отримання лише релевантної реклами'
];

require('./Home.scss');

const Home = () => (
  <div className="home-page-container">
    <Helmet title="Home" />
    <div className="main-image">
      <div className="hero-text">
        <div className="background" />
        <div className="content">
          <h2>
            Рекомендаційна система <strong>ReckYou</strong>
          </h2>
          <h4>
            Система рекомендацій, що не змушує Вас заповнювати величезну кількість форм. Вам просто необхідно
            авторизуватись через свою соціальну мережу, або залишитись анонімним та користуватись обмеженими
            можливостями.
          </h4>
          <h3>Що ми пропонуємо:</h3>
          <ul>
            {offersList.map(item => (
              <li>
                <h4>{item}</h4>
              </li>
            ))}
          </ul>
          <div className="custom-default-button">Зареєструватись зараз</div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

// export default class Home extends PureComponent {
//   render() {
//     require('./Home.scss');
//     return (
//       <div className="home-page-container">
//         <Helmet title="Home" />
//         <div className="main-image">
//           <div className="hero-text">
//             <div className="background" />
//             <div className="content">
//               <h2>Recommendation system <strong>ReckYou</strong></h2>
//               <h4>
//                 A system of recommendations that does not force you to fill a huge number of forms.
//                 You just need to login through your social network account,
//                 or stay anonymous and use partial opportunities
//               </h4>
//               <h3>What we offer:</h3>
//               <ul>
//                 {offersList.map(item => (
//                   <li>
//                     <h4>{item}</h4>
//                   </li>
//                 ))}
//               </ul>
//               <div className="custom-default-button">
//                 Register now1
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
