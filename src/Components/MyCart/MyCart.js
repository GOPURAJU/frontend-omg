// import React from 'react'

// const MyCart = () => {
//   return (
//     <div>
//     <p>Your Cart having ( 04 items)</p>
//     <p>Order Summary</p>
//     </div>

//     )
// }

// export default MyCart

import Table from 'react-bootstrap/Table';
 import "./MyCart.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useState } from 'react';
  

function MyCart() {
// const [count,setCount]=useState(1);
//   const handleAdd=()=>{
// setCount((PrevState)=>PrevState=count+1);
//   }
//   console.log(count)
  return (
    <>
    <div className="tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          <Dropdown>
        <Dropdown.Toggle variant="success">
        category Name
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            fruits
          </Dropdown.Item>
          <Dropdown.Item href="#">
         fruits
          </Dropdown.Item>
          <Dropdown.Item href="#">
          fruits
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </th>
          <th>product Name</th>
          <th>Quantity</th>
          <th>price</th>
          <th>product</th>
          <th>Status</th>
          <th>remarks</th>
        </tr>
       
      </thead>
      {/* <tbody>
       
       {count>0?<DataList/>:""} 
       {count>1?<DataList/>:""} 
       {count>2?<DataList/>:""}
      </tbody>
      */}
    </table>
 
  </div>
  <button className="btn btn-success" >Add Row</button>
  </>
  );
}

export default MyCart;