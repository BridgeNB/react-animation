import React, { Component } from 'react';
import Fade from './Fade';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is a React demo</h1>
        </header>
        <Fade />
      </div>
    );
  }
}

export default App;
