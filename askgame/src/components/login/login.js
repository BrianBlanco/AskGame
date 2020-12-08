import React, { Component } from 'react'

import './login.css';

const md5 = require('md5');


export default class login extends Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    login = () => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })
            .then(response => response.json())
            .then(response => console.log(response));
    }


    render() {
        return (
            <div>
                <div className="login-container">
                    <div className="login-separator">
                    </div>
                    <div className="login-input">
                        <input type="text" onChange={(e) => this.setState({ username: e.target.value })} required />
                        <label>Username</label>
                    </div>
                    <div className="login-input">
                        <input type="text" onChange={(e) => this.setState({ password: md5(e.target.value) })} required />
                        <label>Password</label>
                    </div>
                    <div>
                        <button className="login-submit" onClick={() => this.login()}>Login</button>
                    </div>
                    <div className="login-signup"> Don't have an account?
                        <b style={{ color: "rgb(99, 115, 182)", cursor: "pointer" }}>Sign Up</b>
                    </div>
                </div>

            </div>
        )
    }
}
