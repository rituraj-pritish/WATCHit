import React from 'react';

import { Review } from './Reviews.styles';

const Reviews = ({ reviews }) => {
  const render = reviews.results.map(({ content, id, author, url }) => {
    return (
      <Review key={id}>
        <h4>{author}</h4>
        <p>
          {content
            .split('')
            .filter((l, i) => i < 800)
            .join('')}
          {content.length > 800 && '...'}
        </p>
        {content.length > 800 && (
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Read full review
          </a>
        )}
      </Review>
    );
  });
  return (
    <div>
      {' '}
      <h3>Reviews</h3> {render}
      {reviews.results.length === 0 && <div>No reviews yet</div>}
    </div>
  );
};

export default Reviews;
