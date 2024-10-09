import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <NavLink to="/" className="flexFull navLink">
                <h1 className="footerHead">J5 Health and Chiropractic | Consultation</h1>
            </NavLink>
            <div className="footerLinks">
                <NavLink to="/about" className="navLink">
                    <h3 className="footerLink">About</h3>
                </NavLink>
                <NavLink to="/services" className="navLink">
                    <h3 className="footerLink">Services</h3>
                </NavLink>
                <NavLink to="/articles" className="navLink">
                    <h3 className="footerLink">Articles</h3>
                </NavLink>
                <NavLink to="/faq" className="navLink">
                    <h3 className="footerLink">FAQ</h3>
                </NavLink>
                <NavLink to="/contact" className="navLink">
                    <h3 className="footerLink">Contact</h3>
                </NavLink>
                {/* <h3 className="footerLink">Call Now</h3> */}
            </div>
            <h4 className="copyRight">Copyright ©2024 J5 Health and Chiropractic</h4>
        </div>
    );
}

export default Footer;
