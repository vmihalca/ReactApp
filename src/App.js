import React, { Component } from 'react';
import HomeContainer from './containers/homepage/HomeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
