
import React from "react";
import  '../css/header.css';
import { NavLink } from "react-router-dom";

// class component
class Header extends React.Component {
  render() {
  


    return (
      <header >
 
       <div className="header-left">
        <a id="logo-header" >
			 <img className="logo"src={require('../images/logo-evacc.png')} alt="logo-header"/> 

		</a>   
    <h4>EVACC<span> Foundation</span></h4>
       </div>
    <div className="header-center">
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/Especies">
        Especies
      </NavLink>
      <NavLink activeClassName="active" to="/Cuarentena">
        Cuarentena
      </NavLink>
      <NavLink activeClassName="active" to="/Fallecidas">
        Fallecidas
      </NavLink>
    </nav>
       
    </div>
     <div className="header-right"><button>Buy now</button></div> 
      
      </header>
      
    );
  }
}
 
export default Header;