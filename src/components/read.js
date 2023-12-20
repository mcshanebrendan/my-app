import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";
//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';

function Read() {
   
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        //reads from port 4000 server
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
            <h2 style={{ color: "gold", fontWeight: "bold" }}>Read/Edit our Movie database!</h2>
            {/* shows movie database */}
            <Movies myMovies={data} ReloadData={Reload}></Movies>
            <br /><br />
            {/* Adding buttons at the bottom this page to return to other pages */}
            <Link to="/">
                <button className="stylish-button">Home</button>
            </Link>
            <Link to="/create">
                <button className="stylish-button">Add</button>
            </Link>
            <Link to="/reviews">
                <button className="stylish-button">Reviews</button>
            </Link>
            <Link to="/history">
                <button className="stylish-button">History</button>
            </Link>
            <Link to="/trailers">
                <button className="stylish-button">Old Trailers</button>
            </Link>
            <Link to="/modernTrailers">
                <button className="stylish-button">New Trailers</button>
            </Link>
        </div>
    );

}

export default Read;