// modify the above component to pass these values as props

import React from 'react';

const CarList = (props) => {

    const { car } = props;
    // console.log(car);

    return (
        <div className='container'>
            <h3>Car List using props</h3>
            <ul>
                <li>Model: {car.model}</li>
                <li>Company: {car.company}</li>
                <li>Price: {car.price}</li>
                <li>Configuuration</li>
                <ul>
                    <li>Color: {car.configuration.color}</li>
                    <li>Fuel: {car.configuration.fuel}</li>
                    <li>Cylinder: {car.configuration.cylinder}</li>
                    <li>FuelTankCapacity: {car.configuration.fuelTankCapacity}</li>
                    <li>Mileage</li>
                    <ul>
                        <li>City: {car.configuration.mileage.city}</li>
                        <li>Highway: {car.configuration.mileage.highway}</li>
                    </ul>
                </ul>
                <li>Features:
                <ul>
                        {
                            car.features.map((value, index) => {
                                return (
                                    <li key={index}>{value}</li>
                                );
                            })
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CarList