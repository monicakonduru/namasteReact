import React, { useState } from "react";
import './Navbar.css';

const LocationPanel = ({ isOpen, onClose }) => {
    return (
        <div className={`location-panel ${isOpen ? 'open' : ''}`}>
            <div className="panel-header">
                <button className="close-btn" onClick={onClose}>&times;</button>
            </div>
            <div className="panel-body">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search for area, street name..."
                />
                <div className="location-box d-flex align-items-center p-3 border rounded">
                    <i className="bi bi-crosshair2 me-2 fs-5"></i>
                    <div>
                        <div className="fw-bold">Get current location</div>
                        <small className="text-muted">Using GPS</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [locationOpen, setLocationOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm px-4 py-3">
                <div className="container-fluid p-0">
                    <ul className="navbar-nav d-flex flex-row align-items-center w-100 justify-content-between gap-3 mb-0 ps-0">
                        {/* Logo + Location */}
                        <li
                            className="nav-item d-flex align-items-center gap-2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setLocationOpen(true)}
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s"
                                alt="Swiggy"
                                width="40"
                                height="40"
                                className="logo-img"
                                style={{
                                    borderRadius: '10px',
                                    transition: 'transform 0.2s ease',
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                            <div className="d-flex flex-column justify-content-center">
                                <a className="nav-link-hover small">Other</a>
                                <a className="nav-link-hover text-muted small d-flex align-items-center">
                                    Hosur Road, Adugodi, Bengalur...
                                    <span className="ms-1 dropdown-arrow">&#9662;</span>
                                </a>
                            </div>
                        </li>

                        {/* Nav Items */}
                        {[
                            { icon: 'briefcase', label: 'Swiggy Corporate' },
                            { icon: 'search', label: 'Search' },
                            { icon: 'percent', label: 'Offers', badge: 'NEW' },
                            { icon: 'question-circle', label: 'Help' },
                            { icon: 'person', label: 'Sign In' },
                            { icon: 'cart', label: 'Cart', count: 0 },
                        ].map((item, index) => (
                            <li key={index} className="nav-item d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
                                <i className={`bi bi-${item.icon} nav-icon`}></i>
                                <a href="#" className="nav-link-hover position-relative small">
                                    {item.label}
                                    {item.badge && (
                                        <span className="badge-label">{item.badge}</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <LocationPanel isOpen={locationOpen} onClose={() => setLocationOpen(false)} />
        </>
    );
};

export default Navbar;
