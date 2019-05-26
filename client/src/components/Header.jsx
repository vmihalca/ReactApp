import * as React from 'react';
import logo from './../imgs/logo.png';
import Login from "./Login";

const Header = () => {
    return (
        <header>
            <div id="header">
                <div className="nav-logo">
                    <img className="logo-img" src={logo} alt="Logo" />
                </div>
                <div className="login-wrapper">
                    <Login />
                </div>
            </div>
            <div className="moto">
                <h1 className="moto-title">Get Your Shit Done</h1>
                <div className="moto-text">Let your resolutions entertain you, and your friends!</div>
            </div>
        </header>
    )
};


export default Header;