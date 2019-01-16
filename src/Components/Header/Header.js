import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
    render() {
        return (
            <h1 class='companyName'>
                {this.props.companyName ? this.props.companyName : 'Enter a company name'}
            </h1>
        )
    }
}

export default Header