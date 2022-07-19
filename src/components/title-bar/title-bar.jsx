import React from 'react';
import './title-bar.scss';
import { Link } from "react-router-dom";
class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <Link to="">
                    <button className="title-bar-btn">Home</button>
                </Link>
                
                <Link to="/about">
                    <button className="title-bar-btn">About</button>
                </Link>

                <Link to="/products">
                    <button className="title-bar-btn">Products</button>
                </Link>
                
                <Link to="/faq">
                    <button className="title-bar-btn">FAQ</button>
                </Link>

            </div>

        );
    }
}

export default TitleBar;