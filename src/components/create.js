import { useState } from "react";
import axios from "axios";

function Create() {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setreleaseYear] = useState('');
    const [director, setDirector] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Genre: "+genre+
        " Release Year: "+releaseYear
        + " Director: "+director);

        const movie = {
            title:title,
            genre:genre,
            releaseYear:releaseYear,
            director:director
        };

        axios.post('http://localhost:4000/api/movie',movie)
        .then()
        .catch();

    }
    // some comment
    return (
        <div>
            <h2>Hello from create Component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="number"
                        className="form-control"
                        value={releaseYear}
                        onChange={(e) => { setreleaseYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Director: </label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => { setDirector(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Movie">
                        </input>
                </div>
            </form>
        </div>
    );

}
export default Create;