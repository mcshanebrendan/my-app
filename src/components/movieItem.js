import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import axios from 'axios';
//importing react button
//below I add code so that the page reloads when a movie item has been deleted
function MovieItem(props) {

    //below I add a delete button then I add functionality that deletes the movie item

    return (
        <div>
            <Card>
                <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* shows cover that was added to database */}
                        <img src={props.myMovie.cover}></img>
                        <footer>
                            {props.myMovie.title
                            }
                        </footer>
                        <footer>
                            {props.myMovie.genre
                            }
                        </footer>
                        <footer>
                            {props.myMovie.releaseYear
                            }
                        </footer>
                        <footer>
                        {props.myMovie.director
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* edit button */}
                <Link to={'/edit/'+props.myMovie._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();
                        //deletes movie
                        axios.delete('http://localhost:4000/api/movie/'+props.myMovie._id)
                        .then((res)=>{
                            let reload = props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>
            {/* <h3>{props.myMovie.title}</h3>
            <img src={props.myMovie.thumbnailUrl}></img>
            <p>{props.myMovie.authors[0]}</p> */}
        </div>
    );

}

export default MovieItem;
