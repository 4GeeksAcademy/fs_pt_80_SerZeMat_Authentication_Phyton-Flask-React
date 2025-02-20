import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/register.css";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (actions.register(formData)) navigate('/privateView')
        console.log(formData);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await actions.login(formData);
        if (success) navigate('/privateView');
    };

    return (
        <div className="register-container">
            <>
            <h2 className="form-title">Registro</h2>
            <form onSubmit={handleSubmit} className="form-box">
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={localStorage.getItem('token') ? true : false}
                >
                    Registrarse
                </button>
            </form>
            <h2 className="form-title">Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="form-box">
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    onChange={handleChange}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                />
                <button type="submit" className="submit-btn">Iniciar Sesión</button>

            </form>
            {localStorage.getItem('token') && <Link to={'/privateView'}>Ir a Vista Privada</Link>}
            </>
        </div>
    );
}