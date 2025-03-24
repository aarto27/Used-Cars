import React from 'react'
import CarData from './CarData';
import Login from './Login.jsx'

function Nav({ setFilteredCars }) {

  const handleFilter = (fuelType) => {
    const filteredCars = CarData.filter(car => car.fuel_type === fuelType);
    setFilteredCars(filteredCars);
  };

  return (
    <>
    <nav>
        <div className='logo'>
            <img src="car.png" alt=""  style={{ width: "200px" }}/>
            <h1>Used Cars</h1>
        </div>
        <div className='links'>
        <p href="#" onClick={() => setFilteredCars(CarData)}>Home</p>
          <p href="#" onClick={() => handleFilter("Petrol")}>Petrol</p>
          <p href="#" onClick={() => handleFilter("Diesel")}>Diesel</p>
          <p href="#" onClick={() => handleFilter("Electric")}>Electric</p>
        </div>
        <div className='login'>
            <button>Login</button>
            <img src="cart.jpg" alt=""  style={{ width: "100px" }}/>
            {/* <Login /> */}
        </div>
    </nav>
    </>
  )
}

export default Nav