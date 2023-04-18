import { requestFactory } from "./requester.js";

const baseUrl = 'http://localhost:3030/data/cars';

export const carServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        try {
            const result = await request.get(baseUrl);
            const cars = Object.values(result);
            
            return cars;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const getOne = async (carId) => {
        try {
            const result = await request.get(`${baseUrl}/${carId}`);
            
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const create = async (carData) => {
        try {
            const result = await request.post(baseUrl, carData);
            
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const edit = (carId, data) => request.put(`${baseUrl}/${carId}`, data);

    const deleteCar = (carId) => request.delete(`${baseUrl}/${carId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteCar
    };
};