// import Table from 'react-bootstrap/Table';
import "./AddProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useState } from 'react';
  

function AddProducts() {
const [count,setCount]=useState(1);
  const handleAdd=()=>{
setCount((PrevState)=>PrevState=count+1);
  }
  console.log(count)
  return (
    <>
    <div className="mt-2 ml-4 mr-3 tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          category name
          </th>
          <th>product Name</th>
          <th>description</th>
          <th>price</th>
          <th>productUrl</th>
          <th>Status</th>
          <th>remarks</th>
        </tr>
       
      </thead>
      <tbody>
       
       {count>0?<DataList/>:""} 
       {count>1?<DataList/>:""} 
       {count>2?<DataList/>:""}
      </tbody>
     
    </table>
    <button className=" mt-2 btn btn-success" onClick={handleAdd}>Add Row</button>
  </div>
 
  </>
  );
}

export default AddProducts;