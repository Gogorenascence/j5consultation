import { NavLink } from "react-router-dom";
import './NavBar.css'
import React, { useEffect, useState, useRef } from "react";


function NavBar(){
    const [show, setShow] = useState(false)

    return(
        <nav className="navbar flexFull">
            <ul className="navMenu nav">
                <div className="navHome">
                    <li className="navMenuItem2 flexFull">
                        <NavLink className="navBarLink white flexFull" to="/">
                        <img src="j5ch.png" className="bannerImage2"/>
                        </NavLink>
                    </li>
                    <img className="threeBars"
                        onClick={() => setShow(!show)}
                        src="https://i.imgur.com/Q1Y2vV9.png"
                        alt="menu"/>
                </div>
                <NavLink className="navBarLink white" to="/about">
                    <li className={show? "navMenuItem": "navMenuItem shrink"}
                        onClick={() => setShow(false)}
                    >
                        <h2 className="fw-light textCenter">
                            About
                        </h2>
                    </li>
                </NavLink>
                <NavLink className="navBarLink white" to="/services">
                    <li className={show? "navMenuItem": "navMenuItem shrink"}
                        onClick={() => setShow(false)}
                    >
                        <h2 className="fw-light textCenter">
                            Services
                        </h2>
                    </li>
                </NavLink>
                <NavLink className="navBarLink white" to="/articles">
                    <li className={show? "navMenuItem": "navMenuItem shrink"}
                        onClick={() => setShow(false)}
                    >
                        <h2 className="fw-light textCenter">
                            Articles
                        </h2>
                    </li>
                </NavLink>
                <NavLink className="navBarLink white" to="/faq">
                    <li className={show? "navMenuItem": "navMenuItem shrink"}
                        onClick={() => setShow(false)}
                    >
                        <h2 className="fw-light textCenter">
                            FAQ
                        </h2>
                    </li>
                </NavLink>
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

                <NavLink className="navBarLink white" to="/Contact">
                    <li className={show? "navMenuItem": "navMenuItem shrink"}
                        onClick={() => setShow(false)}
                    >
                        <h2 className="fw-light textCenter">
                            Contact
                        </h2>
                    </li>
                </NavLink>
            </ul>
            <ul className="navMenu mediaNav flex wide">
                <NavLink className="navBarLink white" to="/">
                    <li className="navMenuItem2 flexFull">
                        <img src="j5ch.png" className="bannerImage"/>
                    </li>
                </NavLink>
                <div className="mediaNav" style={{marginLeft: "20px"}}>
                    <NavLink className="navBarLink white" to="/about">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                About
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/services">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                Services
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/articles">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                Articles
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/faq">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                FAQ
                            </h2>
                        </li>
                    </NavLink>

                    <NavLink className="navBarLink white" to="/contact">
                        <li className="navMenuItem">
                            <h2 className="fw-light">
                                Contact
                            </h2>
                        </li>
                    </NavLink>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
