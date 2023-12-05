import logo from './logo.svg';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Content from './components/content';
// import Footer from './components/footer';
// import Header from './components/header';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import ReviewForm from './components/reviews';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
       <Navbar style={{backgroundColor:"greenyellow"}} >
        <Container>
          <Navbar.Brand  style= {{color: "darkviolet"}} href="/">Movie Database</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style= {{color: "darkviolet"}} href="/">Home</Nav.Link>
            <Nav.Link style= {{color: "darkviolet"}}  href="/create">Add Movie</Nav.Link>
            <Nav.Link style= {{color: "darkviolet"}}  href="/read">Read/Edit Movie</Nav.Link>
            <Nav.Link style={{ color: 'darkviolet' }} href="/reviews">Review a Movie!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {/* <Route path='/' element={<Content></Content>}></Route> */}
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path="/reviews" element={<ReviewForm />} /> {/* New route for ReviewForm */}
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 style={{backgroundColor: "yellowgreen"}}><b>Brendan's Movie Database</b></h4>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
