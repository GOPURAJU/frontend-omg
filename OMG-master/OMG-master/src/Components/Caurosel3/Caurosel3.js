import React from 'react'
import test5 from "../Images/smallcaurosel1.jpg";
import test6 from "../Images/smallcaurosel2.jpg";
import test7 from "../Images/smallcaurosel3.jpg";
import "./Caurosel3.css"


const Caurosel3 = () => {
  return (
    <>
   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src={test5} alt="First slide" id="caurosel3"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src={test6} alt="Second slide"  id="caurosel3"/>
    </div>
    <div class="carousel-item">
      <img class="d-block " src={test7} alt="Third slide"  id="caurosel3"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  </>
  )
}

export default Caurosel3