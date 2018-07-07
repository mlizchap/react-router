import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <div className="backDiv">
                    <Link className="btn" to="/">back</Link>
                </div>
                <h1>About</h1>
            </div>
        )
    }
}

export default About;