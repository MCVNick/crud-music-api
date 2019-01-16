import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
    
        this.state = {
          text: 'text 2'
        }
    }

    handleUpdateText() {
        this.props.handleCompanyNameClickFn('text')
    }

    render() {
        return (
            <div>
                <h1 className='companyName' style={{color : this.props.companyPrimaryTextColor, backgroundColor: this.props.companyPrimaryColor}} onClick={() => this.handleUpdateText()}>
                    {this.state.text ? this.props.companyName : 'Enter a company name'}
                </h1>
            </div>
        )
    }
}

export default Header