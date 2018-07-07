import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="backDiv" style={{visibility:'hidden'}}>
                    <Link className="btn" to="/">back</Link>
                </div>
                <div>
                    <h1>Home</h1>
                    <div>Welcome {this.props.match.params.name}</div>
                </div>
            </div>
        )
    }
}

export default Home;