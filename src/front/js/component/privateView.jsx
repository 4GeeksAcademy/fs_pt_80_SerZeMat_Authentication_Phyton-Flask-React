import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PrivateView = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/');
        (actions.checkUser())
    }, []);
   
    return (
        <div className="container mt-5 text-center">
            <h2>¡Bienvenid@, {store.user?.email}</h2>
            <p>Estás en la vista privada.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Volver al Home
            </Link>
        </div>
    );
};