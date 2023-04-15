import { useContext } from "react";
import { Navigate, useParams, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import { CarContext } from "../../contexts/CarContext.js";

export default function OwnerGuard() {
    const { getCar } = useContext(CarContext);
    const { userId } = useContext(AuthContext);
    const { carId } = useParams();

    const currentCar = getCar(carId);
    
    if (currentCar && currentCar._ownerId !== userId) {
        return <Navigate to={`/catalog/${carId}`} />;
    };

    return <Outlet />;
};