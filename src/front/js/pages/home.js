import React from "react";
import "../../styles/home.css"; 
import { Register } from "../component/register.jsx";

export const Home = () => {
	return (
		<div className="home-container">
			<h1 className="home-title">Bienvenid@ a la Autenticación por Token</h1>
			<p className="home-subtitle">Regístrate o inicia sesión para continuar.</p>
			<Register />
		</div>
	);
};