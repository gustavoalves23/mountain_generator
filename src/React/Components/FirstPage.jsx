import React, { Component } from 'react';
import mountain from '../../Mountain';

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        mountain(this.ref.current);
    }
    render() {
        return (
            <div className='first'>
                {/* <h1 className='teste'>teste</h1> */}
                <canvas ref={this.ref} className='webgl'></canvas>
            </div>
        );
    }
}

export default FirstPage;