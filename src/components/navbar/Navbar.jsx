import React from 'react'
import './Navbar.css'
import steering from './../../assets/steering-wheel.png'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='heading-name'>Car Expl <img className='favicon' src= {steering}></img>  re</h1>
    </div>
  )
}

export default Navbar