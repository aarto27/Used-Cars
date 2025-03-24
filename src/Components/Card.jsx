import React, { useEffect, useState } from 'react';
import CarData from './CarData';
import Modal from './Modal';
import LikeBtn from "./LikeBtn";



function Card({  setFilteredCars,filteredCars }) { 

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      if (searchValue.trim() === "") {
          setFilteredCars(CarData);
        }
  }, [searchValue]);
    
    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
    };
 
    const handleSearch = () => {
    const filtered = CarData.filter((Car) =>
    Car.name.toLowerCase().includes(searchValue.toLowerCase()) || 
    Car.fuel_type.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCars(filtered);
  };
    const sorting = () => {
    const sortedLess = [...CarData].sort((a, b) => a.price - b.price);
    setFilteredCars(sortedLess);
    console.log("Sorted Data:",sortedLess);
  };
    const sortH = () =>{
    const sortedHigh = [...CarData].sort((a, b) => b.price - a.price);
    setFilteredCars(sortedHigh);
    console.log("Sorted Data:",sortedHigh);
  }
    return (
        <>
        <div className='Search'>
            {/* Search Bar */}
            <input 
            type="text" 
            placeholder='Search...' 
            className='input'
            value={searchValue}
            onChange={handleInputChange}
            />
          <button className='Search-btn' onClick={handleSearch}>Search</button>
          <button onClick={sorting} className='Sort-Btn' >Less - High</button>
          <button onClick={sortH} className='Sort-Btn' >High - Less</button>
          </div>
            {/* Display Cars */}
            <div className="Card-Holder">
    {filteredCars.length > 0 && filteredCars.map((item, index) => (
        <div key={index} className="Card">
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{item.name}</h3>
            <h4>Fuel Type: {item.fuel_type}</h4>
            <h3 style={{ color: 'green' }}>Price: ${item.price}</h3>
            <LikeBtn />

             {/* Render Modal for each car */}
             <Modal car={item} />
        </div>
    ))}
    {filteredCars.length === 0 && <p>No cars found.</p>}
</div>
        </>
    );
}

export default Card;