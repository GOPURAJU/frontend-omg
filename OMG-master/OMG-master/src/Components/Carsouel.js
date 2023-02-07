import React from 'react'
import { Carousel } from 'react-bootstrap'
// import test5 from "./test5.jpg";
import test4 from "./test4.jpg";
import test5 from "./Images/welcome.png";
import test6 from "./Images/caousel.jpg";
import test7 from "./Images/caurosel5.jpg";

// import test2 from "./test2.jpg";
import { useEffect } from 'react';

const Carsouel = () => {
  return (
    <>

    
<div id="demo" class="carousel slide" data-bs-ride="carousel" >


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={test5} alt="Los Angeles" class="d-block" style={{"width":"100%",height:"460px"}}/>
    </div>
    <div class="carousel-item">
      <img src={test6} alt="Chicago" class="d-block" style={{"width":"100%"}}/>
    </div>
    <div class="carousel-item">
      <img src={test7} alt="New York" class="d-block" style={{"width":"100%"}}/>
    </div>
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div> 
 






  
  

      
    
  </>
    
  )
}

export default Carsouel