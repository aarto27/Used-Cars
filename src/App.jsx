import './App.css'
import React, { useState}  from 'react';
import Nav from './Components/Nav.jsx';
import Card from './Components/Card.jsx'
import CarData from './Components/CarData.js'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './Components/Footer.jsx';




function App() {
  const [filteredCars, setFilteredCars] = useState(CarData);
  return (
    <>
     <Nav setFilteredCars={setFilteredCars} />  
      <Card filteredCars={filteredCars} setFilteredCars={setFilteredCars} /> 
      <Footer />
    </>
  )
}

export default App