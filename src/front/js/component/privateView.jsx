import React from "react";
import { Link } from "react-router-dom";

export const PrivateView = () => {
   
    return (
        <div className="container mt-5 text-center">
            <h2>¡Bienvenido, Usuari@!</h2>
            <p>Estás en la vista privada.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Volver al Home
            </Link>
        </div>
    );
};