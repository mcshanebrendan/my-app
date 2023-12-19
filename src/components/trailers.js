//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';
function Trailers(){
    return (
        <div style= {{fontFamily: 'Roboto, sans-serif'}}>
            <h1 style={{ color: "gold", fontWeight: "bold" }}> Big Movies from the 20th Century</h1>

            <br />
            <h5 style={{color: 'black'}}>Below are trailers for some of the biggest movies from the 20th century </h5>
                <h5 style={{color:'black'}}>Just click on the embedded videos to watch them</h5>
            <br />

            <h2>The Godfather (1972)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sY1S34973zA" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Citizen Kane (1941)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8dxh3lwdOFw" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Schindler's List (1993)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gG22XNhtnoY" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Star Wars: Episode IV - A New Hope (1977)</h2>
            <br />
            <iframe width="560" height="315" src= "https://www.youtube.com/embed/vZ734NWnAHA" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Pulp Fiction (1994)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s7EdQ4FqbhY" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>2001: A Space Odyssey (1968)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oR_e9y-bka0" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>The Shawshank Redemption (1994)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6hB3S9bIaco" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Casablanca (1942)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BkL9l7qovsE" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>The Wizard of Oz (1939)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H_3T4DGw10U" frameborder="0" allowfullscreen></iframe>
            {/* using line breaks to space out the videos */}
            <br /><br /><br /><br /><br />

            <h2>Lawrence of Arabia (1962)</h2>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zmr1iSG3RTA" frameborder="0" allowfullscreen></iframe>
            <br></br><br></br><br></br><br></br>
            {/* Adding buttons at the bottom this page to return to other pages */}
            <Link to="/">
                <button className="stylish-button">Home</button>
            </Link>
            <Link to="/create">
                <button className="stylish-button">Add</button>
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
            <Link to="/modernTrailers">
                <button className="stylish-button">New Trailers</button>
            </Link>
        </div>
      );
}
export default Trailers;