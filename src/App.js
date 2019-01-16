import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header companyName={'Jiggy'}/>
      </div>
    );
  }
}

export default App;
