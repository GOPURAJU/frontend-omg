import React, { useState,useEffect} from 'react';
import {useNavigate}  from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import adminProfile from "../Images/adminProfile.png"
import './UpdateAdminProfile.css'
import ApiServices from '../Services/ApiServices';
import success from "../Images/successful.gif";
import FlashMessage from "react-flash-message";
import {motion} from "framer-motion"
const UpdateAdminProfile = () => {
  const [status, setStatus] = useState(false);
  const[data,setData]=useState([])
  const navigate=useNavigate ();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data });
    ApiServices.updateAdminProfile(data)
      .then((res) => {
        console.log(res.data);
   
        setStatus(true);
      // alert("updated successfully")
      setTimeout(() => {
        navigate('/AdminProfile');
      }, 4000);

      })    
      .catch((error) => {
        // alert("something went wrong");
        setStatus(false);
        console.log(error);
      });
    
  };

        
       
         useEffect(() => {
           ApiServices.getAdminProfile().then((response)=>{
               setData(response.data)
               console.log(response.data);
           }).catch(error=>{
               console.log(error);
           })
         }, [])
  return (
    <>
    <AdminNavbar/>


  
    <br/>
    <br/>
    <motion.div class="card" id="card" style={{"width": "50rem","height":"34.5rem","marginLeft":"5rem","background": " radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
"border": "1px solid #BAB0AE",
"border-radius": "25px"}} 
animate={{x:0,scale:1}}
initial={{scale:0}}>
<div class="card-body m-3">

<div class="media ">
  <span class="media-left">
      <img src={adminProfile} alt="adminProfile"/>
  </span>

  <div class="media-body ml-3">
      <div class="media-heading">Hello Admin !!</div>
      <div class="media-heading1">{data.firstName} {data.lastName}</div>
      
  </div>
</div>

    
<form class="row g-3">
<div class="col-auto">
 
 </div>
 
 <div class="mt-3 row">
   <label for="staticEmail" class="col-sm-2 col-form-label" id="email">FirstName:</label>
   <div class="col-sm-10">
   <input type="text" name="firstName" class="form-control" id="firstName"  value={data.firstName} onChange={handleChange}/>
   </div>
 </div>
 <div class="col-auto">
 
</div>

<div class="mt-1 row">
  <label for="staticEmail" class="col-sm-2 col-form-label" id="email">LastName:</label>
  <div class="col-sm-10">
  <input type="text" name="lastName" class="form-control" id="lastName" value={data.lastName} onChange={handleChange}/>
  </div>
</div>
<div class="col-auto">
 
</div>

<div class="mt-1 row">
  <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Email:</label>
  <div class="col-sm-10">
  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.email} onChange={handleChange}/>
  </div>
</div>

<div class="col-auto">
 
</div>

<div class="mt-1 row">
  <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Phone no: </label>
  <div class="col-sm-10">
  <input type="text" name="phoneNumber" class="form-control" id="phoneNo" value={data.phoneNumber}  onChange={handleChange}/>
  </div>
</div>
<div class="col-auto">
 
</div>

<div class="mt-1 row">
  <label for="staticEmail" class="col-sm-2 col-form-label" id="email">Gender: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" name="gender"  value={data.gender}  onChange={handleChange}/>
  </div>
</div>
<div class="col-auto">
 
</div>

<div class="mt-1 row">
  <label for="staticEmail" class="col-sm-2 col-form-label
  " id="email">Date of birth: </label>
  <div class="col-sm-10">
    <input type="text" class="form-control" name="dob" value={data.dob}  onChange={handleChange}/>
  </div>
</div>
<div class="text-center">
  <button id="btnClear"  class="btn btn-light" type="submit"
              onClick={handleSubmit}>Submit</button>
</div>
</form>
<br/>
<br/>


{status && (
        <FlashMessage duration={3000}>
          <div class="media ">
              <span class="media-left">
              <img src={success} id="gif" alt="successimage" width={"`100px"} height={"100px"}/>
              </span>

            <div class="media-body">
              <p id="success">Sucessfully update your profile !!</p>
                
            </div>
          </div>
         
        </FlashMessage>
      )}
      {status?.type === 'error' && (
        <p id="error">Something went wrong</p>
      )}


</div>
</motion.div>

</>
     
  
  )
}

export default UpdateAdminProfile