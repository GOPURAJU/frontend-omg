import React from "react";
import "./Card1.css";
import "./script.js";
import orange from "../Components/Images/orange.jpg";

import meat from "../Components/Images/loring.jpg";
import flares from "../Components/Images/flares.jpg";
import doan from "../Components/Images/doan.jpg";
import rice from "../Components/Images/rice.jpeg";
import nuts from "../Components/Images/dryFruit.jpeg";


const Card1 = () => {
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={doan} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
              Fruits
           
              </h5>
            </div>
        </div>
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={orange} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
              Dairy Products
              </h5>
            </div>
        </div>
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={flares} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
              Vegetables
              </h5>
            </div>
        </div>
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={rice} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
              Rice
              </h5>
            </div>
        </div>
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={nuts} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
             Dry Fruits
              </h5>
            </div>
        </div>
        <div class="col">
          <div class="card" style={{ background: "white" ,"width":"400px",    height:"400px",
"border-radius":" 50%"}}>
          <img src={meat} alt="Avatar"  class="image" style={{"width":"360px",height:"100%","margin-left":"5px"}}/>
            {/* <img
            id="circle"
              src={meat}
              class="image"
              alt="MEAT"
              style={{ "border-radius": "20px", background: "white" ," height": "350px" }}
            /> */}
           
          </div>
          <br/>
          <div class="card-body">
              <h5 class="title" style={{ color: "black" }}>
              Meat
              </h5>
            </div>
        </div>
    
       
      </div>
    </div>
  );
};

export default Card1;
