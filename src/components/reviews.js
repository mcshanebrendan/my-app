// src/components/reviews.js

//this utilises local storage to save personal movie reviews onto this website

import React, { useState, useEffect } from 'react';
// import './ReviewForm.css';

const ReviewForm = () => {
  const [reviews, setReviews] = useState(() => {
    // Load reviews from localStorage on component mount
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    return storedReviews;
  });

  const [review, setReview] = useState({
    movieName: '',
    rating: 0,
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setReview((prevReview) => ({
      ...prevReview,
      rating: newRating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new review to the reviews array
    const newReview = {
      id: reviews.length + 1, // Assuming each review has a unique ID
      ...review,
    };

    // Save reviews to localStorage after adding a new review
    localStorage.setItem('reviews', JSON.stringify([...reviews, newReview]));

    // Update the state with the new reviews
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Reset the form
    setReview({
      movieName: '',
      rating: 0,
      comment: '',
    });
  };

  return (
    <div className="review-form-container">
      <h2>Post a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" name="movieName" value={review.movieName} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Rating:
          <select name="rating" value={review.rating} onChange={(e) => handleRatingChange(Number(e.target.value))} required>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea name="comment" value={review.comment} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>

      <div>
        <h2>Reviews</h2>
        {reviews.map((existingReview) => (
          <div key={existingReview.id}>
            <h3>{existingReview.movieName}</h3>
            <p>Rating: {existingReview.rating}/5</p>
            <p>{existingReview.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
