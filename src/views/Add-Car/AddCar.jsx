import { React, useState } from 'react';
import './AddCar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCar() {
    const [car, setCar] = useState({
        brand: "",
        model: "",
        mileage: "",
        price: "",
        fuelType: "",
        additionalFeatures: "",
        image: "",
        carType: "",
        id: "",
    });

    const navigate = useNavigate();

    const AddCar = async () => {
        try {
            await axios.post("https://cars-explore-backend.onrender.com/cars", {
                id: car.id,
                brand: car.brand,
                model: car.model,
                carType: car.carType,
                mileage: car.mileage,
                price: car.price,
                fuelType: car.fuelType,
                additionalFeatures: car.additionalFeatures,
                image: car.image,
            });

            setCar({
                brand: "",
                model: "",
                mileage: "",
                price: "",
                fuelType: "",
                additionalFeatures: "",
                image: "",
                carType: "",
                id: "",
            });

            navigate(-1 || '/');
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };

    return (
        <>
            <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${car.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                color: 'black',
              }}>
                
                <h1 className='add-new-car-heading'></h1>
                <div className="popup">
                    <div className="popup-content glass-design">
                        <h2 className="popup-title">Add New Car</h2>
                        <form
                            className="popup-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                AddCar();
                            }}
                        >
                            <input
                                type="number"
                                placeholder="ID"
                                className="popup-input"
                                value={car.id}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        id: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Brand"
                                className="popup-input"
                                value={car.brand}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        brand: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Model"
                                className="popup-input"
                                value={car.model}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        model: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Car Type"
                                className="popup-input"
                                value={car.carType}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        carType: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Mileage"
                                className="popup-input"
                                value={car.mileage}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        mileage: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Price"
                                className="popup-input"
                                value={car.price}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        price: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Fuel Type"
                                className="popup-input"
                                value={car.fuelType}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        fuelType: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Additional Features"
                                className="popup-input"
                                value={car.additionalFeatures}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        additionalFeatures: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Image URL"
                                className="popup-input"
                                value={car.image}
                                required
                                onChange={(e) =>
                                    setCar({
                                        ...car,
                                        image: e.target.value,
                                    })
                                }
                            />

                            <div className="popup-buttons">
                                <button
                                    type="submit"
                                    className="popup-button"
                                >
                                    Add Car
                                </button>
                                <button
                                    type="button"
                                    className="popup-button close-button"
                                    onClick={() => navigate(-1 || '/')}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCar;
