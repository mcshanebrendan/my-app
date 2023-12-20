import MovieItem from "./movieItem";

function Movies(props){
    //uses a map and shows movie item
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie} key={movie._id} Reload={()=>{props.ReloadData();}}></MovieItem>
        }
    );

}

export default Movies;