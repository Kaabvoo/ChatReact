import React, { Component } from 'react';
import './msg.css'

class Mensaje extends Component {
    render() {
        return (
            <div className={this.props.side} >
                <span className="datillos" >{this.props.data}</span>
            </div>
        );
    }
}

export default Mensaje;
