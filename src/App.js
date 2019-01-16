import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      companyName: 'Jiggy',
      companyPrimaryColor: '#666666',
      companyPrimaryTextColor: '',
      companySecondaryColor: '#666666',
      companySecondaryTextColor: '',
      companyTertiaryColor: '#666666',
      companyTertiaryTextColor: '',
    }
  }
  render() {
    const {
      companyName,
      companyPrimaryColor,
      companyPrimaryTextColor,
      companySecondaryColor,
      companySecondaryTextColor,
      companyTertiaryColor,
      companyTertiaryTextColor,
    } = this.state
    return (
      <div className="App">
        <Header companyName={companyName} companyPrimaryColor={companyPrimaryColor} companyPrimaryTextColor={companyPrimaryTextColor}/>
      </div>
    );
  }
}

export default App;
