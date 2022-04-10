import React, { Component } from 'react';

class SecondPage extends Component {
    render() {
        return (
            <div className='second'>
                <div className="name">
                <h1>GUSTAVO MIYAZAKI</h1>
                <h1>FULLSTACK WEB DEVELOPER</h1>
                </div>
                <div className="links">
                    <a href="https://github.com/gustavoalves23">GITHUB</a>
                    <a href="https://www.linkedin.com/in/gumiyazaki/">LINKEDIN</a>
                    <a href="https://gustavomiyazaki.vercel.app/">PERSONAL PAGE</a>
                </div>
                <div className="contact">
                    <h1>EMAIL: gustavo.alves388@gmail.com</h1>
                    <h1>PHONE: +55 (11) 93414-8279</h1>
                </div>
            </div>
        );
    }
}

export default SecondPage;