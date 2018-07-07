import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            
            <div>
                <div className="backDiv">
                    <Link className="btn" to="/">back</Link>
                </div>
                <h1>Contact</h1>
            </div>
        )
    }
}

export default Contact;