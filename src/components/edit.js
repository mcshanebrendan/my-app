import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let {id} = useParams();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setreleaseYear] = useState('');
    const [director, setDirector] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/movie/'+id)
            .then((response)=>{
                setTitle(response.data.title);
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
            <h2>Hello from Edit component!</h2>
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

        </div>
    );
}