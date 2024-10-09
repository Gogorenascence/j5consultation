import { NavLink } from "react-router-dom";
import './NavBar.css'
import React, { useEffect, useState, useRef } from "react";


function NavBar(){
    const [show, setShow] = useState(false)

    return(
        <nav className="navbar flexFull">
            <ul className="navMenu nav">
                <div className="navHome">
                    <li className="navMenuItem2">
                        <NavLink className="navBarLink white flexFull" to="/">
                        <img src="j5ch.png" className="bannerImage2"/>
                        </NavLink>
                    </li>
                    <img className="threeBars"
                        onClick={() => setShow(!show)}
                        src="https://i.imgur.com/Q1Y2vV9.png"
                        alt="menu"/>
                </div>
                <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/directory">
                        <h2 className="fw-light textCenter">
                            About
                        </h2>
                    </NavLink>
                </li>
                <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/services">
                        <h2 className="fw-light textCenter">
                            Services
                        </h2>
                    </NavLink>
                </li>
                <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/services">
                        <h2 className="fw-light textCenter">
                            Articles
                        </h2>
                    </NavLink>
                </li>

                {/* <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/conditions">
                        <h2 className="fw-light textCenter">
                            Conditions List
                        </h2>
                    </NavLink>
                </li>

                <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/admin">
                        <h2 className="fw-light textCenter">
                            Admin
                        </h2>
                    </NavLink>
                </li> */}

                <li className={show? "navMenuItem": "navMenuItem shrink"}
                    onClick={() => setShow(false)}
                >
                    <NavLink className="navBarLink white" to="/Contact">
                        <h2 className="fw-light textCenter">
                            Contact
                        </h2>
                    </NavLink>
                </li>
            </ul>
            <ul className="navMenu mediaNav flex wide">
                <NavLink className="navBarLink white" to="/">
                    <li className="navMenuItem2">
                        <img src="j5ch.png" className="bannerImage"/>
                    </li>
                </NavLink>
                <div className="mediaNav" style={{marginLeft: "20px"}}>
                    <NavLink className="navBarLink white" to="/directory">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                ABOUT
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/services">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                SERVICES
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/services">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                ARTICLES
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/contact">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                CONTACT
                            </h2>
                        </li>
                    </NavLink>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
