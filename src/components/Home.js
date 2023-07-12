import React from 'react';
import ReactDOM from 'react-dom';

import carousel from '../css/carousel.css';
class Home extends React.Component {
  render() {
    return (
    
  
      <main>
        

      <div className="container-carousel mt-4">

        

          <div id="carousel-example-1z" className="carousel slide carousel-fade mb-5" data-ride="carousel">
    
              <ol className="carousel-indicators">
                  <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                  <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" role="listbox">
    
                  <div className="carousel-item active">
                      <img className="d-block w-100" src={require('../images/frog.jpg')} alt="First slide"/>
                  </div>
               
                  <div className="carousel-item">
                      <img className="d-block w-100" src={require('../images/golden-frog.jpg')}  alt="Second slide"/>
                  </div>
                
                  <div className="carousel-item">
                      <img className="d-block w-100" src={require('../images/black-frog.jpg')} alt="Third slide"/>
                  </div>
         
              </div>
     
              <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
       
          </div>
       
       
          </div>
    
        
       
       
    
    
  </main>

     

    );
   
}
}

export default Home;