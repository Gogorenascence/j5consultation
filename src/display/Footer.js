import React, { useEffect, useState } from "react";

function Footer() {

    return (
        <div className="footer">
            <h1 className="footerHead">J5 Health and Chiropractic | Consultation</h1>
            <div className="footerLinks">
                <h3 className="footerLink">About</h3>
                <h3 className="footerLink">Services</h3>
                <h3 className="footerLink">Articles</h3>
                <h3 className="footerLink">Contact</h3>
                <h3 className="footerLink">Call Now</h3>
            </div>
            <h4 className="copyRight">Copyright ©2024 J5 Health and Chiropractic</h4>
        </div>
    );
}

export default Footer;
