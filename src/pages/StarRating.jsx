import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-2xl ${
            (hovered || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;