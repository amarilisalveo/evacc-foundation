import React from 'react';
import ReactDOM from 'react-dom';
import FormSpecies from './FormSpecies';
import FormCuarentena from './FormCuarentena';
import FormFallecidos from './FormFallecidos';
import Home from './Home';


import Header from "./Header";
import Footer from "./footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function routing() {
    

return(
    <Router>
      

      <div>
   
        <Header />
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Especies" component={FormSpecies} />
          <Route path="/Cuarentena" component={FormCuarentena} />
          <Route path="/Fallecidas" component={FormFallecidos} /> 
      
        </Switch> 
   
        <Footer />
      
      </div>
     
    </Router> 
  
  );
}

  export default routing;
  
