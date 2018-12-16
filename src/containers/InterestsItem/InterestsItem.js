import React from 'react';
import Helmet from 'react-helmet';
import Rating from 'react-rating';
import CommentsList from './CommentsList';

import './InterestsItem.scss';

const commentsList = [
  {
    name: 'Volodymyr',
    date: '15 November 2019',
    title: 'Крутий фільм!',
    text: 'Кращий історичний фільм, що я бачив!!!',
    rating: 5
  },
  {
    name: 'Russell_',
    date: '12 September 2005',
    title: 'Не можна пропустити!',
    text:
      '"Gladiator" definitely is a classic film as it combines a simple, but moving, story with beautiful scenery,'
      + ' filming, direction and score  it is truly a "complete" movie.\n'
      + 'I am mostly compelled with the beautiful script which in a way reminds me of poetry, though it is still '
      + 'everyday language. I love the acting portrayed by the late Oliver Reed and also Richard Harris.'
      + 'Russell Crowe, Djimon Housou and Joaquin Phoenix are also superb and the parts suit them perfectly.'
      + 'There are also a number of less "popular" artists who also deserve a big "bravo". Amongst them I have to'
      + ' mention ex-Mr Universe Ralph Moeller who is mostly used as the comic relief of the movie. In Gladiator we ca'
      + 'n also the beautiful and popular Maltese TV Star and actress Ruth Frendo, who although has a small part, she i'
      + 's totally brilliant and outstanding.',
    rating: 4.8
  }
];

const InterestsItem = () => (
  <div className="container interests-item-page-container">
    <Helmet title="Home" />
    <div className="interest-title">
      <h1 className="page-title">Гладіатор</h1>
    </div>
    <div className="interest-description">
      <div className="images">
        <div className="main-image">
          <img src="https://i.pinimg.com/originals/44/31/bd/4431bd4cc9381ba8fe482e83367f3a49.jpg" alt="main" />
        </div>
      </div>
      <div className="full-description">
        <div className="content">
          Гладіатор - епічний історичний драматичний фільм режисера Рідлі Скотта, написаний Девідом Франзоні, Джон Логан
          і Вільям Ніколсон. Фільм був спільно зроблений та випущений DreamWorks Pictures та Універсальні картинки. Це
          зірки Рассел Кроу, Хоакін Фенікс, Конні Нільсен, Ральф Меллер, Олівер Рид (у його заключній ролі), Джимон
          Хаунс, Дерек Якобі, Джон Шрапнель та Річард Харріс. Кроу зображує Іспано-римський генерал Максимус Детимус
          Мерідій, який зраджений, коли Коммод, амбіційний син Імператор Марк Аврелій, вбиває свого батька і захоплює
          трон. Зменшений до рабства, Максим піднімається через ряди гладіаторської арени, щоб помститися за вбивства
          його сім'ї та його імператора. Натхненний романом Даніеля П. Манікса 1958 р. "Ось, до смерті", сценарій
          фільму, спочатку написаний Францоні, був придбаний DreamWorks і Рідлі Скотт підписав, щоб керувати фільмом.
          Основна фотографія , який розпочався до завершення сценарію, розпочався в січні 1999 року і завершився в
          травні цього року рік, коли сцени Стародавнього Риму були розстріляні протягом дев'ятнадцяти тижнів у
          форті-Рікасолі, Мальті. Комп'ютерні ефекти відтворення фільму створювали британська постпродюсерська компанія
          The Mill. Гладіатор був випущений в США 5 травня 2000 року і отримав вигідні відгуки від критиків; хвалу було
          віддано виставам Кроу і Фенікса, напрямку Скотта, візуальним ефектам, послідовності дій, музичний балет і
          костюм і набір дизайнів, тоді як критика була спрямована на скрипт. Фільм зірвався 457 мільйонів доларів у
          всьому світі, що становить другий найвидатніший фільм 2000 року. Фільм отримав кілька нагород, у тому числі
          "Кращий малюнок", "Найкраща акторка для Кроу" та ще три інших "Оскара" на 73-й премії в галузі академії, а
          також перемогла Кращий малюнок у Золотих глобусах, BAFTA та Американська гільдія виробників. Це також було
          зараховано відтворюючи інтерес до розваг, зосереджений навколо давньогрецької та римської культури, наприклад,
          серіал "Рим".
        </div>
        <div className="description-rating">
          <Rating initialRating={4.4} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" readonly />
          <div className="voted">(12320)</div>
        </div>
        <div className="custom-rating">
          <div className="title">Ви ще не проголосували:</div>
          <div className="rating-form">
            <Rating initialRating={3} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
            <div className="submit">
              <button className="btn btn-success">Проголосувати</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommentsList comments={commentsList} />
  </div>
);

export default InterestsItem;
