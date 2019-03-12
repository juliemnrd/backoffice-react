import React, { Component } from 'react';
import logo from '../img/logo.png';
//import loupe from '../img/loupe.svg'


class Header extends Component {
    render() {
        return(
            <header>           
                {/* <img className="searchIcon" src={loupe} alt="search" width="10%" height="auto"/> */}
                    <img className="logo" src={logo} alt="logo" width="10%" height="auto"/>
                <div className="Logo" >
                    <h1> Leah </h1>
                </div>
            </header>
       );
    }
}

export default Header;