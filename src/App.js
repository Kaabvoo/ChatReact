import React, { Component } from 'react';
import MessageArea from './msgArea/msgArea'
import linker from './linkers/objectLinkers';
import middle from './services/service'
import ChooseNick from './nick/nickwind'
// import arrai from './objects/array';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      ppl: "",
      showM: true,
      dummy: false,
      segun: "",
    }
    this.subM = this.subM.bind(this);
    this.changeName = this.changeName.bind(this)
    this.checkUpdates = this.checkUpdates.bind(this)
  }

  componentWillMount(){
    var sec = setInterval(this.checkUpdates, 1000);
    this.setState({segun: sec});
  }

  componentWillUnmount(){
    clearInterval(this.state.segun);
  }

  async checkUpdates(){
    await middle.sendCheck();
    this.setState({dummy: !this.state.dummy})
    // this.forceUpdate();
  }

  componentDidMount(){
    this.inputMsg.focus();
  }
  
  componentDidUpdate(){
    // this.inputMsg.focus();
  }

  changeName(i){
    this.setState({
      ppl: i,
      showM: false,
    })
    linker.man = i;
  }

  subM(e) {
    e.preventDefault();
    linker.agregarMsj({
      "msj": this.state.ppl + ": " + e.target.SMS.value,
      "who": "mine",
    })
    this.setState({dummy: !this.state.dummy})
    middle.sendMsg({
      "msg": e.target.SMS.value,
      "ppl": this.state.ppl,
    })
    e.target.SMS.value = null;
  }

  render() {
    return (
      <div>
        {this.state.showM ? <ChooseNick nombre={this.changeName} /> : null}
        <div className="SonArea">
          <MessageArea />
        </div>
        <form onSubmit={this.subM}>
          <input ref={ref => this.inputMsg = ref} type="text" name="SMS" placeholder="SMS"/>
        </form>
        {/* <button onClick={this.checkUpdates} >Updatear</button> */}
      </div>
    );
  }
}

export default App;