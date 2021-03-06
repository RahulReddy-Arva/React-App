import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie Wizard</h1>
        </header>
        <p className="App-intro">
          Welcome to Movie Wizard 
        </p>
        <div>
          <SearchBar />
          </div>
      </div>
    );
  }
}

export default App;
