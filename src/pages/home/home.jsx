import React from 'react';
import './home.scss';

class HomePage extends React.Component {
    render() {
        return (
            <div className='home-header-container'>
                <h1 className='home-header'>React Test Field</h1>
                <h1 className='home-sub-header'>A place to test shit.</h1>
                <button className="home-btn">Button</button>
            </div>
        );
    }
}

export default HomePage;