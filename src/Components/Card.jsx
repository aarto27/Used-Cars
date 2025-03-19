import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react';

function Card() { 

    

    const [Data, setData] = useState([])

    const getData = async () =>{
       const API = await axios.get('https://dummyjson.com/products')
       console.log(API);
       setData(API.data.products)
       console.log(Data);
    }
    return (
    <>
        <button onClick={getData}> GET API.........</button>
        <div className='Card-Holder'>
            {Data.map((item, index) => (
                <div key={index} className='Card'>
                    <img src={item.thumbnail} alt="" />
                    <h4>{item.title}</h4>
                    <h4>{item.category}</h4>
                    <h3>{item.price}</h3>
                    </div>
                    ))}
        </div>
    </>
  )
}

export default Card