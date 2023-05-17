import React, { Component } from 'react';
import HomePage from '../pages/home/home';
import AboutPage from '../pages/about/about';
import ProductsPage from '../pages/products/products';
import FAQPage from '../pages/faq/faq';
import { Routes, Route } from "react-router-dom";
import TitleBar from './title-bar/title-bar';
import FTSPage from '../pages/fts/fts';

class Main extends Component {

    render() {
        return (
            <div>
                <TitleBar/>
                
                <Routes>
                    <Route path="*" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/fts" element={<FTSPage />}/>
                </Routes>
            </div>
        );
    }
}

export default Main;