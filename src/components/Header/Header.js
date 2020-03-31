import React from 'react'
import './Header.css'

const Header = () => {
    // Header of the website
    return (
        <div className="topnav">
            <div className="logo">
                <p>beam</p>
            </div>
            <div className="navbar">
                <a target="_blank" href="https://www.ridebeam.com/">Go to Beam</a>
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/beam-scooter-locator.appspot.com/o/KevinGondokusumoResume.pdf?alt=media&token=813acd54-3c84-497d-979d-33f98ea604c4">Download my resume</a>
            </div>
        </div>
    )
}

export default Header;