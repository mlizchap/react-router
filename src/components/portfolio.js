import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './portfolio.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="backDiv">
                    <Link className="btn" to="/">back</Link>
                </div>
                <h1>Projects</h1>
                <div className="projectContainer">
                    {this.props.projects.map((i, ind) => {
                        return <div key={ind} className="project">{i}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Portfolio;