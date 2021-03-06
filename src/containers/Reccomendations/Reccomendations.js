import React, { Component } from 'react';
import Helmet from 'react-helmet';
import RecommendationItem from './ReccomendationItem';

const travellingImage = require('./travelling.jpg');
const crosswordsImage = require('./crosswords.jpeg');

const recommendationItems = [
  {
    id: 2,
    title: 'Книги',
    image: 'https://www.dcu.ie/sites/default/files/istock_000002193842small.jpg',
    description: 'Каталог книг, що мають різні жанри. Просто прочитай їх!!!',
    percentage: 80
  },
  {
    id: 2,
    title: 'Подорожі',
    image: travellingImage,
    description:
      '<div>\n'
      + '<p>\n'
      + 'Подорож — переміщення якоюсь певною територією з метою її вивчення, а також із загальноосвітньою,\n'
      + 'пізнавальною, спортивною цілями[1].\n'
      + 'До XVIII–XIX ст. подорожі були одним з основних джерел інформації про ті чи інші країни (їх природу,\n'
      + 'населення, історію, господарство), загальний характер та рельєф поверхні Землі.\n'
      + 'Від античного часу збереглися описи подорожей Геродота, вчених, які супроводжували Олександра Македонського\n'
      + 'в його походах. Класичний приклад подорожей Середньовіччя — походи Марко Поло й Афанасія Нікітіна.\n'
      + 'Пізніше велике значення для розширення знань про Землю мали мандрівки Д. Лівінгстона і Г. Стенлі,\n'
      + 'М. М. Пржевальського та інших. М. М.Пржевальський називав свої мандри науковими, тому що вони могли\n'
      + 'задовольнити лише запити первинного і загального ознайомлення з особливостями тієї чи іншої території.\n'
      + 'Тому вже в XVIII–XIX ст., по мірі поглиблення досліджень, конкретизації та спеціалізації навчальних цілей\n'
      + 'і завдань, подорожі набувають характеру навчальних експедицій (Арміній Вамбері).\n'
      + '</p>\n'
      + '<p>\n'
      + '<b>Подорожі змінюють твоє ставлення до світу</b><br/>\n'
      + 'Ти можеш 20 років прожити, наприклад в Києві, і вважати його великим містом, а Одесу – кращим курортом.\n'
      + 'Але коли ти вибираєшся за межі своєї країни і занурюєшся в міста, значно більші, де пляжі зовсім… інакші;\n'
      + 'коли спостерігаєш розкішні схід і захід сонця, диких тварин у природному середовищі,чудові і величні водоспади\n'
      + 'і незвичайні пам’ятники архітектури… Тільки тоді ти починаєш усвідомлювати, який великий, різноманітний і\n'
      + 'дивовижний цей Світ. Ти навряд чи побачиш все, що варто було б побачити – але ти можеш спробувати зробити це!\n'
      + 'І після цього ти точно знатимеш, що цей світ заслуговує куди більш дбайливого ставлення, адже він такий\n'
      + 'мальовничий та цікавий, а головне – ти бачив його красу власними очима.\n'
      + '</p>\n'
      + '</div>',
    percentage: 77
  },
  {
    id: 3,
    title: 'Кросворди',
    image: crosswordsImage,
    description: 'List of music that have different types. Just listen to it!!!',
    percentage: 61
  }
];

require('./Reccomendations.scss');

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToRender: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isToRender: true });
    }, 2300);
  }

  render() {
    const { isToRender } = this.state;
    return (
      <div className="container catalog-page-container">
        <Helmet title="Home" />
        <h1 className="page-title">Рекомендація нових інтересів</h1>
        <div className="recommendations-catalog">
          {!isToRender ? <h4>Формуються рекомендації</h4> : ''}
          <div style={{ display: 'none' }}>
            {isToRender
              && recommendationItems.map(recommendationItem => (
                <RecommendationItem recommendationInformation={recommendationItem} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
