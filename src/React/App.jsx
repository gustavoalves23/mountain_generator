import React, { Component } from 'react';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';

class App extends Component {
    render() {
        return (
            <div className="app">
                <FirstPage />
                <SecondPage />
            </div>
        );
    }
}

export default App;