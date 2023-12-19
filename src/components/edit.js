import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';

export default function Edit() {
    let {id} = useParams();

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setreleaseYear] = useState('');
    const [director, setDirector] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/movie/'+id)
            .then((response)=>{
                setTitle(response.data.title);
                setCover(response.data.cover);
                setGenre(response.data.genre);
                setreleaseYear(response.data.releaseYear);
                setDirector(response.data.director)
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const movie = {
            title:title,
            cover:cover,
            genre:genre,
            releaseYear:releaseYear,
            director:director
        }

        axios.put('http://localhost:4000/api/movie/'+id, movie)
        .then((res)=>{
            navigate('/read');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
        <div>
            <h2 style={{ color: "gold", fontWeight: "bold" }}>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Release Year: </label>
                    <input type="number"
                        className="form-control"
                        value={releaseYear}
                        onChange={(e) => { setreleaseYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Director: </label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => { setDirector(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Edit Movie">
                        </input>
                </div>
            </form>

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