import React from 'react'
import test5 from "../Images/atta.jpg";
import test6 from "../Images/dals.jpg";
import test7 from "../Images/salt.jpg";
import test8 from "../Images/oils.jpg";
import test9 from "../Images/dryfruits.jpg";
import "./Card4.css"


const Card4 = () => {
  return (
    <div class="row">
    <div class="col-md-2 offset-md-1">
        <div class="card" style={{"background":"white","borderRadius":" 0px"}}>
            <img src={test5} class="card-img-top" alt="..." id="caurosel4"/>
           
        </div>
    </div>
    <div class="col-md-2">
        <div class="card" style={{"background":"white","borderRadius":" 0px"}}>
            <img src={test6} class="card-img-top" alt="..."  id="caurosel4" style={{"marginLeft":"3px"}}/>
           
        </div>
    </div>
    <div class="col-md-2">
        <div class="card" style={{"background":"white","borderRadius":" 0px"}}>
            <img src={test7} class="card-img-top" alt="..."  id="caurosel4"/>
            
        </div>
    </div>
    <div class="col-md-2">
        <div class="card" style={{"background":"white","borderRadius":" 0px"}}>
            <img src={test8} class="card-img-top" alt="..."  id="caurosel4"/>
            
        </div>
    </div>
    <div class="col-md-2 ">
        <div class="card" style={{"background":"white","borderRadius":" 0px"}}>
            <img src={test9} class="card-img-top" alt="..."  id="caurosel4"/>
           
        </div>
    </div>
</div>

  )
}

export default Card4