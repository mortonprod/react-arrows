import React, { Component } from 'react';
import arrowRed from './arrow-red.png';
import arrowBlue from './arrow-blue.png';
import centreGreen from './centre-green.png';
import centreOrange from './centre-orange.png';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "blocks">
        <div className= "blocks-block"></div>
        <div className= "blocks-block">
          <Top/>
        </div>
        <div className= "blocks-block"></div>
        <div className= "blocks-block"></div>
        <div className= "blocks-block">
          <Centre/>
        </div>
        <div className= "blocks-block"></div>
        <div className= "blocks-block">
          <Left/>
        </div>
        <div className= "blocks-block"></div>
        <div className= "blocks-block">
          <Right/>
        </div>        
      </div>
    );
  }
}

export default App;

class Top extends Component {
  constructor(){
    super();
    this.state = {
      classNameRed:"",
      classNameBlue:""
    }
  }
  onHover(){
    this.setState({
      classNameRed:"blink",
      classNameBlue:"blink blink_offset"
    });
  }
  onLeave(){
    this.setState({
      classNameRed:"",
      classNameBlue:""
    });
  }
  render(){
    return (
        <div className="fill top">
          <div className="top-title">
            <span> Web </span>
          </div>
          <div onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} className="top-arrow">
            <img src={arrowRed} className={"top-arrow-red " + this.state.classNameRed}  alt="arrow-red" />
            <img src={arrowBlue} className={"top-arrow-blue " + this.state.classNameBlue} alt="arrow-blue" />          
          </div>
        </div>
    )
  }
}

class Left extends Component {
  constructor(){
    super();
    this.state = {
      classNameRed:"",
      classNameBlue:""
    }
  }
  onHover(){
    this.setState({
      classNameRed:"blink",
      classNameBlue:"blink blink_offset"
    });
  }
  onLeave(){
    this.setState({
      classNameRed:"",
      classNameBlue:""
    });
  }
  render(){
    return (
        <div className="fill left">
          <div onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} className="left-arrow">
            <img src={arrowRed} className={this.state.classNameRed}  alt="arrow-red" />
            <img src={arrowBlue} className={this.state.classNameBlue} alt="arrow-blue" />          
          </div>
          <div className="left-title">
            <span> Mobile </span>
          </div>
        </div>
    )
  }
}

class Right extends Component {
  constructor(){
    super();
    this.state = {
      classNameRed:"",
      classNameBlue:""
    }
  }
  onHover(){
    this.setState({
      classNameRed:"blink",
      classNameBlue:"blink blink_offset"
    });
  }
  onLeave(){
    this.setState({
      classNameRed:"",
      classNameBlue:""
    });
  }
  render(){
    return (
        <div className="fill right">
          <div onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} className="right-arrow">
            <img src={arrowRed} className={this.state.classNameRed}  alt="arrow-red" />
            <img src={arrowBlue} className={this.state.classNameBlue} alt="arrow-blue" />          
          </div>
          <div className="right-title">
            <span> Generic </span>
          </div>
        </div>
    )
  }
}

class Centre extends Component {
  constructor(){
    super();
    this.state = {
      classNameGreen:"",
      classNameOrange:""
    }
  }
  onHover(){
    this.setState({
      classNameGreen:"blink",
      classNameOrange:"blink blink_offset"
    });
  }
  onLeave(){
    this.setState({
      classNameGreen:"",
      classNameOrange:""
    });
  }
  render(){
    return (
          <div className="fill" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)}>
            <img src={centreGreen} className={this.state.classNameGreen}  alt="tag-green" />
            <img src={centreOrange} className={this.state.classNameOrange} alt="tag-orange" />          
          </div>
    )
  }
}
 