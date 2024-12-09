import React, { useEffect, useState } from 'react';
import './CarDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CarDetail() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  
  const loadCarDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5001/cars/${id}`);
      setCar(response.data.data);
    } catch (err) {
      console.error('Error fetching car details:', err);
      alert('Failed to load car details. Please try again.');
    }
  };

 
  const deleteCar = async (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await axios.delete(`http://localhost:5001/cars/${id}`);
        alert('Car deleted successfully!');
        navigate(-1); 
      } catch (err) {
        console.error('Error deleting car:', err);
        alert('Failed to delete the car. Please try again.');
      }
    }
  };

  useEffect(() => {
    loadCarDetail(id);
  }, [id]);

  
  if (!car) return <h1>Car details not found!</h1>;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${car.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        color: 'black',
      }}
    >

      <div className="buttons-container">
        <button
          type="button"
          className="btn-delete"
          onClick={() => deleteCar(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn-edit"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
      </div>
      <h1 className="car-detail-heading">Car Detail</h1>

      <div className="car-details-container">
        <div>
          <img src={car.image} alt="Car" className="car-detail-img" />
        </div>

        <div>
          <div className="key-value-div">
            <span className="car-key">Brand: </span>
            <span className="car-value">{car?.brand}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Model: </span>
            <span className="car-value">{car?.model}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Mileage: </span>
            <span className="car-value">{car?.mileage}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Price: </span>
            <span className="car-value">{car?.price}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Fuel Type: </span>
            <span className="car-value">{car?.fuelType}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Additional Features: </span>
            <span className="car-value">{car?.additionalFeatures}</span>
          </div>
          <div className="key-value-div">
            <span className="car-key">Car Type: </span>
            <span className="car-value">{car?.carType}</span>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default CarDetail;
