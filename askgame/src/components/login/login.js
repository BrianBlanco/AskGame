import React, { Component } from 'react'
import LoginModal from "react-login-modal";

import './login.css';

const md5 = require('md5');


export default class login extends Component {


    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            email: "",
            showSignUp: false,
            patterns: {
                username: /^[a-zA-Z]+$/,
                password: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/,
                email: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
            },
            errors: {
                username: false,
                password: false,
                repeatPassword: false,
                email: false
            }
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


    toogleSignUp = () => {
        this.setState({ showSignUp: !this.state.showSignUp });
    }

    checkInput = (e, position) => {
        console.log(e.target.value);
        console.log(e.target.value.match(this.state.patterns[position]) != null);
    }

    render() {
        return (
            <div>
                <LoginModal />
                <div></div>
            </div>
        )
    }
}