import React from 'react';
import './home.scss';

class HomePage extends React.Component {

    public state = { subLabel: ""};
    public letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    render() {

        return (
            <div className='page-container'>
                <h1 className='home-header'>React Test Field</h1>
                <h1 className='home-sub-header'>{this.state.subLabel}</h1>
                
                <div></div>
            </div>
        );
    }

    async componentDidMount() {

        const sleep = (time: number) => {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        for (let x = 0; x < 15; x++) {
            await sleep(80);

            let randomString = "";
            while (randomString.length < 5) {
                randomString += this.letters.charAt(Math.floor(Math.random() * this.letters.length));
            }

            this.setState({ subLabel: randomString});
        }

        this.setState({ subLabel: "Hello"});
    
    }
}

export default HomePage;