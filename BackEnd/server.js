//setting up server on port: 4000
//using mongoose and express
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// MongoDB connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@benny0.dd7zjrx.mongodb.net/');
}

// Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  cover: String,
  genre: String,
  releaseYear: Number,
  director: String,
  averageRating: { type: Number, min: 0, max: 5, default: 0 }, // New field for average rating
  numberOfRatings: { type: Number, default: 0 } // New field for the number of ratings
});
const Movie = mongoose.model('Movie', movieSchema);

// Simplified Review Schema
const reviewSchema = new mongoose.Schema({
  comment: String  // Keeping only one field for simplicity
});
const Review = mongoose.model('Review', reviewSchema);

// Routes
app.post('/api/movie', (req, res) => {
    console.log(req.body);
    Movie.create(req.body)
    .then(()=>{ res.send("Movie Created")})
    .catch(()=>{ res.send("Movie NOT Created")});
});

app.get('/api/movies', async(req, res) => {
  let movies = await Movie.find({});
  res.json(movies);
});
//find movie by ID
app.get('/api/movie/:id', async(req, res) => {
  console.log(req.params.id);
  let movie = await Movie.findById(req.params.id);
  res.send(movie);
});
//updates movie
app.put('/api/movie/:id', async(req, res) => {
  console.log("Update: "+req.params.id);
  let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.send(movie);
});
//deletes movie
app.delete('/api/movie/:id', async(req, res) => {
  console.log("Delete: "+req.params.id)
  let movie = await Movie.findByIdAndDelete(req.params.id);
  res.send(movie);
});

// Simplified POST route for reviews
app.post('/api/review', async(req, res) => {
  try {
    const { comment } = req.body;
    //outputting review to console on server
    console.log(req.body)
    const newReview = new Review({ comment });
    await newReview.save();
    res.status(200).json(newReview);
  } catch (error) {
    console.error("Error in POST /api/review", error);
    res.status(500).send("Error adding review");
  }
});
//server listening on port 400
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
