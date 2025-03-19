import './App.css'
import React from 'react';
import Nav from './Components/Nav.jsx';
import Search from './Components/Search.jsx';
import Card from './Components/Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <>
    <Nav />
    <Search />
    <Card />
    </>
  )
}

export default App