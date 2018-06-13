import React, { Component } from 'react';
import linker from '../linkers/objectLinkers';
import './msgArea.css'

import Mensaje from './msg/msg'

class MessageArea extends Component {
    componentDidUpdate(){
        if(this.txtLog){
            this.txtLog.scrollTop = this.txtLog.scrollHeight;
        }
    }

    render() {
        return (
            <div className="MessageArea" ref={ref => this.txtLog = ref}>
                {linker.msjs.map((mp, i) => {return(<Mensaje key={i} data={mp.msj} side={mp.who} />)})}
            </div>
        );
    }
}

export default MessageArea;
