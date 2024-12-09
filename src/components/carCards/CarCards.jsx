import React from 'react'
import './carCards.css';
import { Link } from 'react-router-dom';

function CarCards({ brand, model, mileage, price, fuelType, additionalFeatures, image, carType, id }) {
    return (
        <>

        <Link to = {`/detail/${id}`} style={{textDecoration: "none"} }>
                <div className='card'>
                    <div>
                        <img className='car-image' src={image}></img>
                    </div>

                    <div>
                        <h3 className='car-model-text'>{model}</h3>

                        <div><span className='brand'>Brand:</span> <span className='car-brand-name '>{brand}</span></div> <br />

                        <div><span className='brand'>Type:</span> <span className='car-brand-name'>{carType}</span></div>

                    </div>

                </div>

                </Link>



        </>


    )
}

export default CarCards