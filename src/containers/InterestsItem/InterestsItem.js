import React from 'react';
import Helmet from 'react-helmet';
import Rating from 'react-rating';
import CommentsList from './CommentsList';

import './InterestsItem.scss';

const commentsList = [
  {
    name: 'Volodymyr',
    date: '15 November 2019',
    title: 'Wow film!',
    text: 'Great film!!!',
    rating: 5
  },
  {
    name: 'Russell_',
    date: '12 September 2005',
    title: 'Can\'t be missed!',
    text: '"Gladiator" definitely is a classic film as it combines a simple, but moving, story with beautiful scenery,'
    + ' filming, direction and score  it is truly a "complete" movie.\n'
    + 'I am mostly compelled with the beautiful script which in a way reminds me of poetry, though it is still '
    + 'everyday language. I love the acting portrayed by the late Oliver Reed and also Richard Harris.'
    + 'Russell Crowe, Djimon Housou and Joaquin Phoenix are also superb and the parts suit them perfectly.'
    + 'There are also a number of less "popular" artists who also deserve a big "bravo". Amongst them I have to'
    + ' mention ex-Mr Universe Ralph Moeller who is mostly used as the comic relief of the movie. In Gladiator we ca'
    + 'n also the beautiful and popular Maltese TV Star and actress Ruth Frendo, who although has a small part, she i'
    + 's totally brilliant and outstanding.',
    rating: 4.8
  },
  {
    name: 'paulyub',
    date: '7 September 2002',
    title: 'One of the Greatest Movies Ever',
    text: 'I love history, and to me, Gladiator is a masterpiece. It is the most accurate picture of the Roman'
    + ' Empire Hollywood has ever put out. People declare Spartacus a masterpiece, but Gladiator far outdoes Spartacus'
    + ' in quality. The costuming, the acting, the screenplay, the scenery, and the fighting styles made me think that'
    + ' I had traveled back to 180 A.D. Russell Crowe is a true Hollywood tough guy, and he is superb in this movie.'
    + ' Joaquin Phoenix is outstanding as a villain, one of the best in movie history. He played his character as if it'
    + ' were a psychologist\'s dream case. Connie Nielsen plays one of the strongest female characters that I have ever'
    + ' seen. The choreographer of the action sequences was brilliant. Ridley Scott did an outstanding job in recreatig'
    + ' the Empire, including the multitude of ethnic groups within the Empire and accurately depicting everyday life.'
    + ' If you\'re looking for insight into what the Roman Empire was like, this is a perfect depiction.',
    rating: 4.5
  }
];

const InterestsItem = () => (
  <div className="container interests-item-page-container">
    <Helmet title="Home" />
    <div className="interest-title">
      <h1>Gladiator</h1>
    </div>
    <div className="interest-description">
      <div className="images">
        <div className="main-image">
          <img src="https://i.pinimg.com/originals/44/31/bd/4431bd4cc9381ba8fe482e83367f3a49.jpg" alt="main" />
        </div>
      </div>
      <div className="full-description">
        <div className="content">
          Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni,
          John Logan, and William Nicholson. The film was jointly produced and released by DreamWorks Pictures and
          Universal Pictures. It stars Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed
          (in his final role), Djimon Hounsou, Derek Jacobi, John Shrapnel, and Richard Harris. Crowe portrays
          Hispano-Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of
          Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus rises
          through the ranks of the gladiatorial arena to avenge the murders of his family and his emperor.
          Inspired by Daniel P. Mannix's 1958 novel Those About to Die, the film's script, initially written by
          Franzoni, was acquired by DreamWorks and Ridley Scott signed on to direct the film. Principal photography
          , which started out before the script was completed, began in January 1999 and wrapped up in May of that
          year, with the scenes of Ancient Rome were shot over a period of nineteen weeks in Fort Ricasoli, Malta.
          The film's computer-generated imagery effects were created by British post-production company The Mill.
          Gladiator was released in the United States on May 5, 2000 and received favorable reviews from critics;
          praise was given to the performances of Crowe and Phoenix, Scott's direction, visuals, action sequences,
          musical score, and the costume and set designs while criticism was aimed at the script. The film grossed
          $457 million worldwide, making it the second highest-grossing film of 2000. The film won multiple awards,
          including Best Picture, Best Actor for Crowe and three other Oscars at the 73rd Academy Awards and also won
          Best Picture at the Golden Globes, BAFTA, and Producers Guild of America. It has also been credited with
          rekindling interest in entertainment centered around ancient Greek and Roman culture,
          such as the TV series Rome.
        </div>
        <div className="description-rating">
          <Rating
            initialRating={4.4}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            readonly
          />
          <div className="voted">(12320)</div>
        </div>
        <div className="custom-rating">
          <div className="title">You haven't voted yet:</div>
          <div className="rating-form">
            <Rating
              initialRating={3}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
            />
            <div className="submit">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommentsList comments={commentsList} />
  </div>
);

export default InterestsItem;
