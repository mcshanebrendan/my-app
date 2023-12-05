import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";

function Read() {
   
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/movies')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

    }, []
  );

  const Reload= (e)=>{
    axios.get('http://localhost:4000/api/movies')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
  }

    return (
        <div>
            <h2>Read/Edit our Movie database!</h2>
            <Movies myMovies={data} ReloadData={Reload}></Movies>
        </div>
    );

}

export default Read;