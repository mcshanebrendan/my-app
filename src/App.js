import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import ReviewForm from './components/reviews';
import History from './components/history';
import Trailers from './components/trailers';
import TopMovies21stCentury from './components/modernTrailers';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#007BFF", color: "#FFF" , fontFamily: 'Roboto, sans-serif'}}>
        <Navbar style={{ backgroundColor: "#0056b3" }}>
          <Container>
            {/* Update the logo style with the "Pacifico" font which I added link for in public/index.html*/}
            <Navbar.Brand href="/" style={{ fontFamily: 'Pacifico', color: "gold" }}>Movie Database</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "#FFF" }}>Home</Nav.Link>
              <Nav.Link href="/create" style={{ color: "#FFF" }}>Add Movie</Nav.Link>
              <Nav.Link href="/read" style={{ color: "#FFF" }}>Read/Edit Movie</Nav.Link>
              <Nav.Link href="/reviews" style={{ color: "#FFF" }}>Review a Movie!</Nav.Link>
              <Nav.Link href="/history" style={{ color: "#FFF" }}>History</Nav.Link>
              <Nav.Link href="/trailers" style={{ color: "#FFF" }}>Old Movie Trailers</Nav.Link>
              <Nav.Link href="/modernTrailers" style={{ color: "#FFF" }}>New Movie Trailers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/read' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path="/reviews" element={<ReviewForm />} />
          <Route path="/history" element={<History/>} />
          <Route path="/trailers" element={<Trailers/>} />
          <Route path="/modernTrailers" element={<TopMovies21stCentury />} />
        </Routes>
        {/* adding linebreaks to put the footer further down the page*/}
        <br /><br /><br /><br /><br />
         
        {/* <h4 style={{ backgroundColor: "#0056b3", color: "gold" , fontFamily: 'Pacifico'}}><b>Brendan's Movie Database</b></h4> */}
        <footer style={{ backgroundColor: "#0056b3", color: "gold" , fontFamily: 'Pacifico'}}>Brendan's Movie Database</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
