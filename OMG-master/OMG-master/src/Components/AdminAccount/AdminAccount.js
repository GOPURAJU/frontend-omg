import React, { useState,useEffect } from 'react'
import Micro from "../Images/omglogo.png";

import Home from "../Images/home.png";
import profile from "../Images/profile.png";
import adminProfile from "../Images/adminProfile.png"
import editProfile from "../Images/editProfile.png"

import "./AdminAccount.css";
import "./AdminAccount.scss";
import { NavLink,Link } from "react-router-dom";
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import ApiService  from '../Services/ApiServices';
import {motion} from "framer-motion"
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AdminAccount = () => {
 const [data,setData]=useState([]);



  useEffect(() => {
    ApiService.getAdminProfile().then((response)=>{
        setData(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }, [])
 
  return (
    
        <>
 
     <AdminNavbar />


  
      <br/>
      <br/>


   
      <motion.div 
   
      animate={{x:0,scale:1}}
      initial={{scale:0}}
     
      
      
      >
      <div class="card" id="card" style={{"width": "50rem","height":"30rem","marginLeft":"5rem",  "background":" radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
          "border": "1px solid #BAB0AE",
          "border-radius": "25px"}}>

        
        <div class="card-body m-3">
        <span class="float-right">
              <Link to='/UpdateAdminProfile'><img src={editProfile} alt="editProfile"/></Link>
          </span>
        <div class="media ">
          <span class="media-left">
              <img src={adminProfile} alt="adminProfile"/>
          </span>
        
          <div class="media-body ml-3">
              <div class="media-heading">Hello Admin !!</div>
              <div class="media-heading1">{data.firstName} {data.lastName}</div>
              
          </div>
      </div>

       <div >   
      <form class="row g-3">
      <div class="col-auto">
        
        </div>
        
        <div class="mt-4 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Firstname:</label>
          <div class="col-sm-10">
            <div id="email"  class="form-control-plaintext">{data.firstName}</div>
          </div>
        </div>
      
        <div class="col-auto">
        
        </div>
        
        <div class="mt-1 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Lastname:</label>
          <div class="col-sm-10">
            <div id="email"  class="form-control-plaintext">{data.lastName}</div>
          </div>
        </div>
      

        <div class="col-auto">
        
        </div>
        
        <div class="mt-1 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Email:</label>
          <div class="col-sm-10">
            <div id="email"  class="form-control-plaintext">{data.email}</div>
          </div>
        </div>

      <div class="col-auto">
        
        </div>
        
        <div class="mt-1 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Phone no: </label>
          <div class="col-sm-10">
            <div id="email"  class="form-control-plaintext">{data.phoneNumber}</div>
          </div>
        </div>
        <div class="col-auto">
        
        </div>
        
        <div class="mt-1 row">
          <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Gender: </label>
          <div class="col-sm-10">
          <div id="email"  class="form-control-plaintext">{data.gender}</div>
          </div>
        </div>
        <div class="col-auto">
        
        </div>
        
        <div class="mt-1 row">
          <label for="staticEmail" class="col-sm-2 col-form-label
          " id="email">Date of birth: </label>
          <div class="col-sm-10">
          <div id="email"  class="form-control-plaintext">{data.dob}</div>
          </div>
        </div>
      
      </form>
      </div>  
        </div>

        
</div>

</motion.div>
{/* <button class="learn-more">Learn More</button> */}
    
       </>
      )

  
}

export default AdminAccount