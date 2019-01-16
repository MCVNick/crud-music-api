import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      companyName: 'Company Name',
      companyPrimaryColor: '#666666',
      companyPrimaryTextColor: '#00FFFF',
      companySecondaryColor: '#666666',
      companySecondaryTextColor: '',
      companyTertiaryColor: '#666666',
      companyTertiaryTextColor: '',
    }

    this.handleCompanyNameClick = this.handleCompanyNameClick.bind( this )
  }

  handleCompanyNameClick(newName) {
    console.log(newName)
    this.setState({
      companyName: newName
    })
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
        <Header handleCompanyNameClickFn={this.handleCompanyNameClick} companyName={companyName} companyPrimaryColor={companyPrimaryColor} companyPrimaryTextColor={companyPrimaryTextColor}/>
      </div>
    );
  }
}

export default App;
