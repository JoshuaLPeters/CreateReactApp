import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        // This is the HTML code or JSX - Syntactical sugar for React
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <Person/>
      </div>
    );
  }
}

export default App;
