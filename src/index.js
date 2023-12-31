import React from 'react';
import ReactDOM from 'react-dom';
import FormSpecies from './components/FormSpecies';
import FormCuarentena from './components/FormCuarentena';
import FormFallecidos from './components/FormFallecidos';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";
import Footer from "./components/footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
const routing = (
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
  
ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
