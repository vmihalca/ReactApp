import * as React from 'react';
import AccountBox from '@material-ui/icons/AccountBox';
import logo from './../imgs/logo6.png';

const Header = () => {
    return (
        <header>
            <div id="header">
                <div className="nav-logo">
                    <img className="logo-img" src={logo} alt="Logo" />
                </div>
                <a className="no-underline" href="">
                    <div className="login-wrapper">
                        <span>LOGIN</span>
                        <AccountBox />
                    </div>
                </a>
            </div>
            <div className="moto">
                <h1 className="moto-title">Get Your Shit Done</h1>
                <div className="moto-text">Let your resolutions entertain you, and your friends!</div>
            </div>
        </header>
    )
};


export default Header;