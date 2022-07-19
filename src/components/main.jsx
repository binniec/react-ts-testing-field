import React, { Component } from 'react';
import HomePage from '../pages/home/home';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Main extends Component {

    render() {
        return (
            <div>
                <div className="title-bar">
                    <button className="title-bar-btn">Home</button>
                    <Link to="/about">
                        <button className="title-bar-btn">About</button>
                    </Link>
                    <button className="title-bar-btn">Products</button>
                    <button className="title-bar-btn">FAQ</button>
                    <input type="checkbox"/>
                </div>

                <Routes>
                    <Route path="*" element={<HomePage />} />
                    <Route path="/about" element={<HomePage />} />
                </Routes>
            </div>
        );
    }
}

export default Main;