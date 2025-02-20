import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ms-auto">
					<Link to="/">
						<button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
