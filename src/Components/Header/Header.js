import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
    
        this.state = {
          text: '',
          showMenu: false,
        }
    }

    handleOnChange(value){
        this.props.handleCompanyNameClickFn(value)
        this.setState({
            text: value
        })
    }

    handleUpdateText() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return (
            <div>
                <h1
                className='companyName'
                style={{color : this.props.companyPrimaryTextColor, backgroundColor: this.props.companyPrimaryColor}}
                onClick={() => this.handleUpdateText()}
                unselectable='on'
                >
                    {this.state.text ? this.props.companyName : 'Enter a company name'}
                </h1>
                <div className={this.state.showMenu ? 'hiddenMenu showMenu' : 'hiddenMenu'}>
                    <input onChange={(e) => this.handleOnChange(e.target.value)} className='nameSelector'/>
                    <br></br>
                    Company Name Color:
                    <input type='color' className='colorSelector'/>
                    <br></br>
                    Boarder Color:
                    <input type='color' className='colorSelector'/>
                </div>
            </div>
        )
    }
}

export default Header