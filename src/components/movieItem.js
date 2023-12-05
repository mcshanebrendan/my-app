import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import axios from 'axios';
//importing react button
//below I add code so that the page reloads when a movie item has been deleted
function BookItem(props) {

    //below I add a delete button then I add functionality that deletes the movie item

    return (
        <div>
            <Card>
                <Card.Header>{props.Movie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.cover}></img>
                        <footer>
                            {props.myMovie.author 
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/'+props.myMovie._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();

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
