import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import './CommentsList.scss';

const CommentsList = props => {
  const { comments } = props;
  return (
    <div className="comments-container">
      <div className="comments-title page-title">Список коментарів:</div>
      <div className="comments-list">
        {comments
          && comments.map(item => (
            <div className="comment-item">
              <div className="comment-title">
                <div className="author">{item.name}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="comment-rating">
                <div className="title">{item.title}</div>
                <div className="rating">
                  <Rating initialRating={item.rating} emptySymbol="fa fa-star-o" fullSymbol="fa fa-star" readonly />
                </div>
              </div>
              <div className="comment-description">{item.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
