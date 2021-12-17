import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand" > <img src="https://i.ibb.co/stCPcMS/logo.png" alt="jesco fasion" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="shop" className="nav-link" >Shop</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="blogs" className="nav-link" >Blogs</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="about" className="nav-link" >About Us</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="contact" className="nav-link" >Contact Us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;