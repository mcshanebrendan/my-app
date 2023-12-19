//imports for page buttons
import React from 'react';
import { Link } from 'react-router-dom';

function TopMovies21stCentury() {
    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
            <h1 style={{ color: "gold", fontWeight: "bold" }}>Big Movies from the 21st Century</h1>

            <br />

            <h2>The Lord of the Rings: The Return of the King (2003)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/r5X-hFf6Bwo" frameborder="0" allowfullscreen></iframe>

            <h2>The Dark Knight (2008)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" frameborder="0" allowfullscreen></iframe>

            <h2>Inception (2010)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" frameborder="0" allowfullscreen></iframe>

            <h2>Avatar (2009)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" frameborder="0" allowfullscreen></iframe>

            <h2>Gladiator (2000)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/owK1qxDselE" frameborder="0" allowfullscreen></iframe>

            <h2>No Country for Old Men (2007)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/38A__WT3-o0" frameborder="0" allowfullscreen></iframe>

            <h2>There Will Be Blood (2007)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FeSLPELpMeM" frameborder="0" allowfullscreen></iframe>

            <h2>Spirited Away (2001)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" frameborder="0" allowfullscreen></iframe>

            <h2>The Social Network (2010)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lB95KLmpLR4" frameborder="0" allowfullscreen></iframe>

            <h2>City of God (2002)</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ioUE_5wpg_E" frameborder="0" allowfullscreen></iframe>
            
            <br></br>
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
            <Link to="/trailers">
                <button className="stylish-button">Old Trailers</button>
            </Link>
        </div>
    );
}

export default TopMovies21stCentury;
