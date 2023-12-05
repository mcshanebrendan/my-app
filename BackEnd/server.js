const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//mongodb link
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@benny0.dd7zjrx.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
  title:String,
  genre:String,
  releaseYear:Number,
  director:String
})

const movieModel = mongoose.model('sdfsdfsdfsdfsdfffffffffffff423', movieSchema);

//server side code for deleting movie
//using app.delete and deleting the movie by id

app.delete('/api/movie/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id)

  let movie = await movieModel.findByIdAndDelete(req.params.id);

  res.send(movie);
})


app.put('/api/movie/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(movie);
})


app.post('/api/movie', (req,res)=>{
    console.log(req.body);

    movieModel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })
    .then(()=>{ res.send("Movie Created")})
    .catch(()=>{ res.send("Movie NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/movies', async(req, res)=>{
    
  let movie = await movieModel.find({});
  res.json(movie);
})

app.get('/api/movie/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let movie = await movieModel.findById(req.params.identifier);
  res.send(movie);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})