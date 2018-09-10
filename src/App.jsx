import React, { Component } from 'react';
import logo from './logo.png';

import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="metlife-background"></div>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">MetLife React Components</h1>
        </header>
        <p className="app-intro">
          Based on <a href="http://ux.metlife.com/index.html#">MetLife ux design</a> Guidelines
        </p>
        <p className="app-intro">
          In progress...
      </p>
      </div>
    );
  }
}

export default App;
