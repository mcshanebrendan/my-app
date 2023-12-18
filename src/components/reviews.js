import React, { useState } from 'react';
import axios from 'axios';

function Review() {
  const [movieTitle, setMovieTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the movie title, rating, and comment to the server
      await axios.post('http://localhost:4000/api/review', { movieTitle, rating, comment });
      alert('Review submitted successfully');
      setMovieTitle(''); // Reset the movie title
      setRating(0); // Reset the rating
      setComment(''); // Reset the comment field
    } catch (error) {
      console.error('Error submitting review', error);
      alert('Failed to submit review');
    }
  };

  return (
    <div>
      <h3>Submit a Review</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
        <br />
        <label>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;
