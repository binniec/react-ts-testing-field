import React, { Component } from 'react';
import HomePage from './home/home';

const birthDate = new Date('1994/05/01');

class Main extends Component {

    render() {
        return  <div>
                    <h1>Hello from Main</h1>
                    <HomePage passed="Hello from main to home"/>
                    <span>{birthDate.toDateString()}</span>
                </div>
    }
}

export default Main;