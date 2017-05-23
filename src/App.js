import React, { Component } from 'react';
import arrowRed from './arrow-red.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "blocks">
        <div className= "blocks-block"></div>
        <div id="top" className= "blocks-block"></div>
        <div className= "blocks-block"></div>
        <div className= "blocks-block"></div>
        <div id="centre" className= "blocks-block"></div>
        <div className= "blocks-block"></div>
        <div id="left" className= "blocks-block"></div>
        <div className= "blocks-block"></div>
        <div id="right" className= "blocks-block"></div>        
      </div>
    );
  }
}

export default App;

     // <div className="App">
     //   <div className="App-header">
     //     <img src={logo} className="App-logo" alt="logo" />
     //     <h2>Welcome to React</h2>
     //   </div>
     //   <p className="App-intro">
     //     To get started, edit <code>src/App.js</code> and save to reload.
     //   </p>
     // </div>
