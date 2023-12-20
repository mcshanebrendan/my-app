//import useState and axios
import { useState } from "react";
import axios from "axios";
//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
    //array for title, cover, genre, release year and director
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setreleaseYear] = useState('');
    const [director, setDirector] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        //logging the movie to the console
        console.log("Title: "+title+
        " Genre: "+genre+
        " Release Year: "+releaseYear
        + " Director: "+director);
        //constructor
        const movie = {
            title:title,
            cover:cover,
            genre:genre,
            releaseYear:releaseYear,
            director:director
        };
        //post to port 4000 server
        axios.post('http://localhost:4000/api/movie',movie)
        .then()
        .catch();

    }
    // html code for adding movies to database, you add title, cover, genre, director and release year
    return (
        <div>
            <h2 style={{ color: "gold", fontWeight: "bold" }}>Add a movie to my database! </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        //sets title
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        //sets cover
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        //sets genre
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="number"
                        className="form-control"
                        value={releaseYear}
                        // sets release year
                        onChange={(e) => { setreleaseYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Director: </label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        //sets director
                        onChange={(e) => { setDirector(e.target.value) }}
                    />
                </div>
                <div>
                    {/* submit button */}
                    <input type="submit"
                    value="Add Movie">
                        </input>
                </div>
            </form>
            <br /><br />
            {/* Adding buttons at the bottom this page to return to other pages */}
            <Link to="/">
                <button className="stylish-button">Home</button>
            </Link>
            <Link to="/read">
                <button className="stylish-button">Read</button>
            </Link>
            <Link to="/reviews">
                <button className="stylish-button">Reviews</button>
            </Link>
            <Link to="/history">
                <button className="stylish-button">History</button>
            </Link>
            <Link to="/trailers">
                <button className="stylish-button">Trailers</button>
            </Link>
            <Link to="/modernTrailers">
                <button className="stylish-button">New Trailers</button>
            </Link>
        </div>
    );

}
export default Create;