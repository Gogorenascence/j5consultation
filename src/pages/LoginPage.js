import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import {GoogleButton} from "react-google-button"
import { AuthContext } from "../context/AuthContext";
import './Auth.css';

function LoginPage() {

    const [showMenu, setShowMenu] = useState({
        show: false,
        section: ""
    })

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showForgot, setShowForgot] = useState(false)
    const [forgotEmail, setForgotEmail] = useState("")

    const {
        signup,
        login,
        logout,
        getUser,
        signUpCred,
        setSignUpCred,
        resetSignUpCred,
        loginCred,
        setLoginCred,
        resetLoginCred,
        signUpError,
        setSignUpError,
        loginError,
        setLoginError,
        passwordCon,
        setPasswordCon,
        showSignUpModal,
        setShowSignUpModal,
        showLoginModal,
        setShowLoginModal,
        viewPass,
        setViewPass,
        account,
        googleSignIn,
        googleSignInMobile,
        forgotPassword
    } = useContext(AuthContext)

    const navigate = useNavigate()

    const {isDark} = useContext(AppContext)

    const navbar = useRef(null)
    useOutsideAlerter(navbar);

    const handleShowMenu = (show, section) => {
        setShowMenu({
            show: show,
            section: section
        })
    }

    useEffect(() => {
        getUser()
    },[account]);

    const handleShowLoginModal = (event) => {
        setShowLoginModal(!showLoginModal)
        if (showLoginModal === false) {
            resetLoginCred()
        }
        setShowSignUpModal(false)
        setSignUpError("")
        setLoginError("")
        setViewPass(false)
        resetSignUpCred()
        setShowMobileMenu(false)
        console.log(account)
    }

    const handleShowSignUpModal = async (event) => {
        setShowSignUpModal(!showSignUpModal)
        if (showSignUpModal === false) {
            resetSignUpCred()
        }
        setShowLoginModal(false)
        setSignUpError("")
        setLoginError("")
        setViewPass(false)
        resetLoginCred()
        setShowMobileMenu(false)
    }

    const handleSignUpCredChange = (event) => {
        setSignUpCred({ ...signUpCred, [event.target.name]: event.target.value });
        // setLoginCred({...loginCred, [event.target.name]: event.target.value})
    };

    const handlePasswordConChange = (event) => {
        setPasswordCon(event.target.value);
    };

    const handleLoginCredChange = (event) => {
        setLoginCred({ ...loginCred, [event.target.name]: event.target.value });
    };

    const handleForgotEmail = (event) => {
        setForgotEmail(event.target.value);
    };

    const handleViewPass = (event) => {
        const pass = document.getElementById("pass");
        const passConf = document.getElementById("passConf");
        if (pass.type === "password") {
            pass.type = "text";
            setViewPass(true)
        } else {
            pass.type = "password";
            setViewPass(false)
        }
        if (passConf.type === "password") {
            passConf.type = "text";
            setViewPass(true)
        } else {
            passConf.type = "password";
            setViewPass(false)
        }
    };

    const handleGoogleSignIn = async () => {
        handleShowLoginModal()
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoogleSignInMobile = async () => {
        try {
            await googleSignInMobile()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSendPasswordReset = (event, email) => {
        event.preventDefault()
        forgotPassword(email)
        handleShowLoginModal()
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // Function for click event
            function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleShowMenu(false, "none");
            }
            }
            // Adding click event listener
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref]);
    }

    const handleShowForgot = () => {
        if (showForgot) {
            setShowForgot(false)
            setForgotEmail("")
            setLoginError([])
        } else {
            setShowForgot(true)
            setLoginError([])
        }
    }

    return (
        <div className="flexColumnFull">
            <div className="flexFull">
                {account && account.roles.includes("admin")?
                    <button onClick={() => navigate("/admin")}
                        className="blueSubmit"
                    >
                        Messages
                    </button>
                :
                    <button onClick={() => handleShowLoginModal()}
                        className="blueSubmit"
                    >
                        Login
                    </button>
                }
                {account && account.roles.includes("admin")?
                    <button onClick={() => logout()}
                        className="blueSubmit"
                    >
                        Logout
                    </button>
                :null}
                {/* <button onClick={() => handleShowSignUpModal()}
                    className="blueSubmit"
                >
                    Signup
                </button> */}
            </div>
            { showSignUpModal?
                <>
                    <form onSubmit={(event) => signup(event, handleShowSignUpModal)} className={!isDark? "medium-modal" :"medium-modal-dark"}>
                    <h2 className="label-center">Create Account </h2>
                    <span className="flex-content">
                        <div className="login" style={{ margin: "20px 20px 20px 20px"}}>

                        <h5 className="label2">Email </h5>
                        <input
                            className="builder-input"
                            type="text"
                            placeholder=" Email"
                            onChange={handleSignUpCredChange}
                            name="email"
                            value={signUpCred.email}>
                        </input>

                        <h5 className="label2">Username </h5>
                        <input
                            className="builder-input"
                            type="text"
                            placeholder=" Username"
                            onChange={handleSignUpCredChange}
                            name="username"
                            value={signUpCred.username}>
                        </input>

                        <h5 className="label2">Password </h5>
                        <input
                            className="builder-input"
                            id="pass"
                            type="password"
                            placeholder=" Password"
                            onChange={handleSignUpCredChange}
                            name="password"
                            value={signUpCred.password}>
                        </input>

                        { !viewPass?
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/MfNqq8S.png":"https://i.imgur.com/z4CRxAm.png"}
                            onClick={handleViewPass}
                            title="view password"
                            />:
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/w8oag0B.png":"https://i.imgur.com/NE539ZZ.png"}
                            onClick={handleViewPass}
                            title="hide password"
                            />
                        }

                        <h5 className="label2">Confirm Password </h5>
                        <input
                            className="builder-input"
                            id="passConf"
                            type="password"
                            placeholder=" Confirm Password"
                            onChange={handlePasswordConChange}
                            value={passwordCon}>
                        </input>

                        { !viewPass?
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/MfNqq8S.png":"https://i.imgur.com/z4CRxAm.png"}
                            onClick={handleViewPass}
                            title="view password"
                            />:
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/w8oag0B.png":"https://i.imgur.com/NE539ZZ.png"}
                            onClick={handleViewPass}
                            title="hide password"
                            />
                        }
                        </div>
                    </span>
                    <div style={{margin: "20px 0px 20px 0px"}}>
                        { signUpError? (
                        signUpError.map((error) =>
                            (
                            <>
                                <p className="error">{error}</p>
                            </>
                            ))): null
                        }
                    </div>

                    <div className="aligned">
                        <button className="front-button" type="submit">Signup</button>
                        <button className="end-button margin-left-3" onClick={handleShowSignUpModal}>Close</button>
                        <p onClick={handleShowLoginModal}
                        className="pointer label-center">
                            Already have an account? Log in!
                        </p>
                    </div>
                    </form>
                    <div className="blackSpace"></div>
                </>:
                null
            }
            { showLoginModal?
            <>
                {!showForgot?
                <>
                    <form onSubmit={(event) => login(event, handleShowLoginModal)}
                    className={!isDark? "medium-modal" :"medium-modal-dark"}>
                    <h2 className="label-center">User Login </h2>
                    <span className="flex-content">
                        <div className="login" style={{margin: "20px 20px 20px 20px"}}>
                        <h5 className="label2">Email </h5>
                        <input
                            className="builder-input"
                            type="text"
                            placeholder=" Email"
                            onChange={handleLoginCredChange}
                            name="email"
                            value={loginCred.email}>
                        </input>

                        <h5 className="label2">Password </h5>
                        <input
                            className="builder-input"
                            id="pass"
                            type="password"
                            placeholder=" Password"
                            onChange={handleLoginCredChange}
                            name="password"
                            value={loginCred.password}>
                        </input>

                        { !viewPass?
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/MfNqq8S.png":"https://i.imgur.com/z4CRxAm.png"}
                            onClick={handleViewPass}
                            title="view password"
                            />:
                            <img
                            className="logo2 pointer"
                            src={!isDark? "https://i.imgur.com/w8oag0B.png":"https://i.imgur.com/NE539ZZ.png"}
                            onClick={handleViewPass}
                            title="hide password"
                            />
                        }

                        { loginError?
                            <p className="error">{loginError}</p>:
                            null
                        }

                        </div>
                    </span>
                    <div className="aligned">
                        <button className="front-button" type="submit">Login</button>
                        <button className="end-button margin-left-3" onClick={handleShowLoginModal}>Close</button>
                        <div className="wide100p flex-full margin-top-20 hidden4 media-flex">
                            <GoogleButton onClick={() => handleGoogleSignIn(handleShowLoginModal)}/>
                        </div>
                        <div className="wide100p flex-full margin-top-20 mediaHidden">
                            <GoogleButton onClick={() => handleGoogleSignInMobile(handleShowLoginModal)}/>
                        </div>
                        <p onClick={handleShowSignUpModal}
                        className="pointer label-center">
                            New here? Sign Up!
                        </p>
                        <p onClick={handleShowForgot}
                        className="pointer label-center">
                            Forgot Password?
                        </p>
                    </div>
                    </form>
                    <div className="blackSpace"></div>
                </>:
                <>
                    <form onSubmit={(event) => handleSendPasswordReset(event, forgotEmail)}
                    className={!isDark? "medium-modal" :"medium-modal-dark"}>
                    <h2 className="label-center">Password Reset </h2>
                    <span className="flex-content">
                        <div className="login" style={{margin: "20px 20px 20px 20px"}}>
                        <h5 className="label2">Account Email </h5>
                        <input
                            className="builder-input"
                            type="text"
                            placeholder=" Account Email"
                            onChange={handleForgotEmail}
                            name="email"
                            value={forgotEmail}>
                        </input>
                        </div>
                    </span>
                    <div className="aligned margin-bottom-20">
                        <button className="front-button" type="submit">Send An Email</button>
                        <button className="end-button margin-left-3" onClick={handleShowForgot}>Cancel</button>
                    </div>
                    </form>
                    <div className="blackSpace"></div>
                </>
                }
            </>:null
            }
        </div>
    );
}




export default LoginPage;
