import React, { useState } from 'react';

const Rating = ({ stars }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    console.log('rating', rating)
    console.log('hover', hover)
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "star_button on" : "star_button off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div >
    );
};
export default Rating;