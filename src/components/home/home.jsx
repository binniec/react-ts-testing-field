import React from 'react';
import './home.scss';

class HomePage extends React.Component {
    render() {
        return <div>
                <h2>Hello from Home</h2>
                <h3>{this.props.passed}</h3>
                <button>Button</button>
            </div>
    }
}

export default HomePage;