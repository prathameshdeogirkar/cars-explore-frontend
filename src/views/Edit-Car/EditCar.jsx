import { React, useState, useEffect } from 'react';
import './EditCar.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditCar() {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    mileage: "",
    price: "",
    fuelType: "",
    additionalFeatures: "",
    image: "",
    carType: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); 

  
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/cars/${id}`);
        console.log(response.data); 
        setCar(response.data.data || response.data); 
      } catch (error) {
        console.error("Error fetching car details:", error);
        alert("Failed to load car details. Please try again.");
      }
    };

    fetchCarDetails();
  }, [id]);

  const editCar = async () => {
    try {
      await axios.put(`http://localhost:5001/cars/${id}`, car);
      alert("Car details updated successfully!");
      navigate(-1 || '/'); 
    } catch (error) {
      console.error("Error updating car:", error);
      alert("Failed to update car details. Please try again.");
    }
  };

  return (
    <>
    <div
    className="car-detail-wrapper"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      color: 'black',
    }}>
      
      <div className="popup">
        <div className="popup-content glass-design">
          <h2 className="popup-title">Edit Car Details</h2>
          <form
            className="popup-form"
            onSubmit={(e) => {
              e.preventDefault();
              editCar();
            }}
          >
            <input
              type="text"
              placeholder="Brand"
              className="popup-input"
              value={car.brand}
              required
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
            <input
              type="text"
              placeholder="Model"
              className="popup-input"
              value={car.model}
              required
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
            <input
              type="text"
              placeholder="Car Type"
              className="popup-input"
              value={car.carType}
              required
              onChange={(e) => setCar({ ...car, carType: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mileage"
              className="popup-input"
              value={car.mileage}
              required
              onChange={(e) => setCar({ ...car, mileage: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              className="popup-input"
              value={car.price}
              required
              onChange={(e) => setCar({ ...car, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Fuel Type"
              className="popup-input"
              value={car.fuelType}
              required
              onChange={(e) => setCar({ ...car, fuelType: e.target.value })}
            />
            <input
              type="text"
              placeholder="Additional Features"
              className="popup-input"
              value={car.additionalFeatures}
              required
              onChange={(e) =>
                setCar({ ...car, additionalFeatures: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              className="popup-input"
              value={car.image}
              required
              onChange={(e) => setCar({ ...car, image: e.target.value })}
            />

            <div className="popup-buttons">
              <button type="submit" className="popup-button"
              onClick={() =>{
                EditCar();
              }}>
                Save Changes
              </button>
              <button
                type="button"
                className="popup-button close-button"
                onClick={() => navigate(-1 || '/')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default EditCar;
