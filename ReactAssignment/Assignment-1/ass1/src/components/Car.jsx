/* create a component to print the details of following object */
import React from 'react';

const Car = () => {

    const cars = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,
            },
        },
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering'],
    }

    return (
        <div className='container'>
            <h3>Car List</h3>
            <ul>
                <li>Model: {cars.model}</li>
                <li>Company: {cars.company}</li>
                <li>Price: {cars.price}</li>
                <li>Configuuration</li>
                <ul>
                    <li>Color: {cars.configuration.color}</li>
                    <li>Fuel: {cars.configuration.fuel}</li>
                    <li>Cylinder: {cars.configuration.cylinder}</li>
                    <li>FuelTankCapacity: {cars.configuration.fuelTankCapacity}</li>
                    <li>Mileage</li>
                    <ul>
                        <li>City: {cars.configuration.mileage.city}</li>
                        <li>Highway: {cars.configuration.mileage.highway}</li>
                    </ul>
                </ul>
                <li>Features:
                    <ul>
                        {
                            cars.features.map((value, index) => {
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

export default Car