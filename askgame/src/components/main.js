import React, { Component } from 'react';
import LoginModal from "react-login-modal";
import Login from './login/login';

import './main.css';

export default class main extends Component {

    handleSignup = (username, email, password) => { };
    handleLogin = (username, password) => { }

    render() {
        return (
            <div>
                <h1>Main</h1>
                <div id="main">
                <LoginModal
                    handleSignup={this.handleSignup}
                    handleLogin={this.handleLogin}
                   
                />
                <Login />

                </div>
            </div>
        )
    }
}
