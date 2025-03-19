import React from 'react'

function Nav() {
  return (
    <>
    <nav>
        <div className='logo'>
            <img src="BAGS.jpg" alt=""  style={{ width: "100px" }}/>
            <h1>E-Commerce</h1>
        </div>
        <div className='links'>
            <a href="">Home</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Kids</a>
        </div>
        <div className='login'>
            <button>Login</button>
            <img src="cart.jpg" alt=""  style={{ width: "100px" }}/>
        </div>
    </nav>
    </>
  )
}

export default Nav