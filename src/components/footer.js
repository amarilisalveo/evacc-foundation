
import React from "react";

import  '../css/footer.css';
// function component
const Footer = props => {
  return (
    <footer className="footer-distributed">

    <div className="footer-left">
    <img className="logo-footer" src={require('../images/logo-evacc.png')} alt="logo-footer"/>
			
        <h3>EVACC<span> Foundation</span></h3>

        <p className="footer-links">
            <a href="/" className="link-1">Home</a>
            
            <a href="/Especies">Especies</a>
        
            <a href="/Cuarentena">Cuarentena</a>
        
            <a href="/Fallecidas">Fallecidas</a>
            
        
        </p>

        <p className="footer-company-name">Team NAT © 2024</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Panamá</span> Hotel Campestre, El Valle de Antón</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>
+507 986 8094 </p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">info@evaccfoundation.org</a></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>Sobre nosotros</span>
            Organización no gubernamental sin fines de lucro, registrada por el Decreto Ejecutivo No 62 el 20 de marzo de 2017, identificando la resolución No 004-PJ-004 del Ministerio de Gobierno y Justicia de Panamá.
        </p>

        <div className="footer-icons">

            <a href="https://www.facebook.com/evaccfoundation/" target="_blank" rel="noopener noreferrer">
     
  <img src={require('../images/icons/icon-facebook.png')} height="39" width="39" alt="icon-fb"/>
</a>
            <a href="https://www.instagram.com/evaccfoundation/" target="_blank" rel="noopener noreferrer">    
  <img src={require('../images/icons/icon-instagram.png')} height="39" width="39" alt="icon-fb"/></a>
            <a href="https://twitter.com/EvaccFoundation" target="_blank" rel="noopener noreferrer">    
  <img src={require('../images/icons/icon-twitter.png')} height="39" width="39" alt="icon-fb"/></a>
           

        </div>

    </div>
    
		</footer>
  );
};
 
export default Footer;