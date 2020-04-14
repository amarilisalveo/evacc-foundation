
import React from "react";
import header from './header.css';
// class component
class Header extends React.Component {
  render() {
    return (
      <header >
 
       <div class="header-left">
        <a id="logo-header" href="#">
			 <img class="logo"src={require('./images/logo-evacc.png')}/> 

		</a>   
    <span class="site-name">Evacc Foundation</span>
       </div>
    <div class="header-center">
        <ul>
            <li><a href="#">Our products</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </div>
    <div class="header-right"><button>Buy now</button></div>
      
      </header>
      
    );
  }
}
 
export default Header;