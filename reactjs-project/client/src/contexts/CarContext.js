import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { carServiceFactory } from '../services/carService.js';

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [carErrors, setCarErrors] = useState([]);
    const carService = carServiceFactory();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            })
            .catch((error) => {
                setCarErrors(error)
                setTimeout(() => {
                    setCarErrors([]);
                }, 5000);
            })
    }, []);

    const onCreateCarSubmit = async (data) => {
        try {

            const newCar = await carService.create(data);
            
            setCars(state => [...state, newCar]);
            
            navigate('/catalog');
        } catch (error) {
            console.log(error);
            setCarErrors(error);
            setTimeout(() => {
                setCarErrors([]);
            }, 5000);
        }
    };

    const onCarEditSubmit = async (values) => {
        try {

            const result = await carService.edit(values._id, values);
            
            setCars(state => state.map(x => x._id === values._id ? result : x));
            
            navigate(`/catalog/${values._id}`);
        } catch (error) {
            console.log(error);
            setCarErrors(error);
            setTimeout(() => {
                setCarErrors([]);
            }, 5000);
        }
    };

    const getCar = (carId) => {
        return cars.find(car => car._id === carId);
    };

    const deleteCar = (carId) => {
        setCars(state => state.filter(car => car._id !== carId));
    };

    const contextValues = {
        cars,
        onCreateCarSubmit,
        onCarEditSubmit,
        getCar,
        deleteCar,
        carErrors
    };

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};