import React, { Component } from 'react';
import Login from './login/login';

import './main.css';

export default class main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
                <div id="main">
                    <Login />

                </div>
            </div>
        )
    }
}
