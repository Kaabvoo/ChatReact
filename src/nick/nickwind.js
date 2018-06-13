import React, { Component } from 'react';
import './nickwind.css'

class ChooseNick extends Component {
    constructor(props){
        super(props);
        this.changName = this.changName.bind(this);
    }

    changName(i){
        i.preventDefault();
        this.props.nombre(i.target.inName.value);
    }

    render() {
        return (
            <div className="ModelNick">
                <p>Ingrese un NickName:</p>
                <form onSubmit={this.changName}>
                    <input type="text" className="inNick" name="inName" />
                </form>
            </div>
        );
    }
}

export default ChooseNick;
