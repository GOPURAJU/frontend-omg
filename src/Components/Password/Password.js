import React, { useState } from 'react'
import './Password.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import forgotPassword from '../Images/forgotPassword.png'
import {motion} from "framer-motion";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import ApiServices from '../Services/ApiServices';
import {useNavigate} from 'react-router-dom'

const Password = () => {

    // const [value, setValue] = useState()
//     const [phoneNumber, setPhoneNumber] = useState("");
    
//   const handleOtp=(e)=>{
//     e.preventDefault();

//     console.log({phoneNumber});

//     ApiServices.otp({phoneNumber})
//       .then((res) => {
//         console.log(res.data);
//         alert("Otp sent");
//         // navigate("/");
//       })
//       .catch((error) => {
//         console.log(error);
       

//       });
//   }
const [data, setData] = useState({});
const navigate=useNavigate ();
  
    

  
const handleChange = (e) => {
  const { name, value } = e.target;

  setData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
  // setData({...data,[e.target.name]:[e.target.value]})
};
const handleSubmit = (e) => {
      
    e.preventDefault();
   
    console.log(data);
  ApiServices.otp(data)
      .then((res) => {
        console.log(res.data);
        // alert("password changed successfully");
        navigate("/successMsg");
        setTimeout(() => {
            navigate("/login")
          },5000);
        

  
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
       
      });
  };

  return (
    <>
    <AdminNavbar />
    <motion.div class="card mt-3" style={{ "width": "48rem", "height": "35rem" ,"marginLeft":"180px"}}      animate={{x:0,scale:1}}
     initial={{scale:0}}>
          <div class="card-body">
              <form onSubmit={handleSubmit}>
                  <div class="card-title">Change Password</div>
                  <br />

                  {/* <div class="form-row">
                      <div class="col p-1">
                          <label id="please">Please enter Phone or Email</label>
                          <PhoneInput style={{"width":"85%"}}
                        
                           defaultCountry="IN"
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber}/>

                        
                      </div>
                      <div class="col pb-2">
                          <button type="submit" id="otp" class="btn btn-light mt-5 pl-4 pr-4 pt-2 pb-2" style={{ "background": " linear-gradient(178.46deg, #B9B9B9 49.57%, rgba(185, 185, 185, 0) 98.69%)" }}
                          onClick={handleOtp}>Get OTP</button>
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="col p-1">
                          <label id="please" className='mt-2'>Please enter valid OTP here </label>
                          <input type="text" class="form-control mt-2" id='otp1'/>
                      </div>
                  </div>
                     */}
     
  <div class="media ">
    <span class="media-left">
        <img src={forgotPassword} alt="forgotPasswordimage"/>
    </span>
  
    <div class="media-body ml-3">
        <div class="media-heading ml-5 pl-5">
        <div class="form-row" >
                      <div class="col p-1">
                          <label className='mt-2'  style={{" font-family": "inherit"}}>Please enter old password</label>
                          <input type="text" class="form-control mt-2" id="control" name="oldPassword"  value={data.oldPassword} onChange={handleChange}/>
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="col p-1">
                          <label className='mt-2'  style={{" font-family": "inherit"}}>Please enter new password </label>
                          <input type="text" class="form-control mt-2" id="control" name="newPassword"  value={data.newPassword} onChange={handleChange}/>
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="col p-1">
                          <label className='mt-2'   style={{" font-family": "inherit"}}>Please confirm new password </label>
                          <input type="text" class="form-control mt-2" id="control" name="confirmPassword"  value={data.confirmPassword} onChange={handleChange} />
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm-12 mt-3">
                          <button id="btnSearch" class="btn btn-light mt-1 mr-5 pl-4 pr-4 pt-2 pb-2" >Cancel</button>
                          <button id="btnClear1" class="btn btn-light mt-1 mr-5 pl-4 pr-4 pt-2 pb-2" type="submit">Submit</button>
                      </div>
                  </div>
        
        
        
        
        </div>
       
        
    </div>
</div>
</form>
          </div>
      </motion.div>  
      </>
      )
  
}

export default Password