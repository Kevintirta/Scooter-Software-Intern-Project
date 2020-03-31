import React from 'react';
import './Header.css'
const Header = () => {
    // Header of the website
    return (
        <div className="topnav">
            <div className="logo">
                <p>beam</p>
            </div>
            <div className="navbar">
                <a className="link" target="_blank" href="https://www.ridebeam.com/">Go to Beam</a>
                <a className="link" >Download my resume</a>
            </div>
        </div>
    )
}

export default Header;