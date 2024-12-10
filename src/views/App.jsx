import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarCards from '../components/carCards/CarCards';
import Navbar from '../components/navbar/Navbar'
import './App.css'

import addCarImg from './../assets/add-car.png'
import { Link } from 'react-router-dom';


const apiUrl = import.meta.env.VITE_APP_API_URL

function App() {
  const [cars, setCars] = useState([])

  const loadStudents = async () => {
    const response = await axios.get(`${apiUrl}/cars`);
    setCars(response.data.data);
  }


  useEffect(() => {
    loadStudents()
  }, [])


  return (

    <>

      <div className='background-image'>
        <Navbar />

        <div className='car-icon-div'>
          <span>Add New Car</span>
          <Link to="/add">
            <img src={addCarImg} alt="add icon" className='add-car-icon' />
          </Link>
        </div>

        <div className="card-container">

          {cars.map((car, i) => {
            const { brand, model, mileage, price, fuelType, additionalFeatures, image, carType, id } = car;
            return (
              <CarCards
                id={id}
                key={i}
                brand={brand}
                model={model}
                carType={carType}
                mileage={mileage}
                price={price}
                fuelType={fuelType}
                additionalFeatures={additionalFeatures}
                image={image}
              />
            );
          })}

        </div>

      </div>

    </>
  )
}

export default App
