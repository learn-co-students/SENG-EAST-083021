import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-brand">Cool App</div>
                <div className="d-flex">
                    <p className="m-3">See cool things</p>
                    <p className="m-3">Login</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
