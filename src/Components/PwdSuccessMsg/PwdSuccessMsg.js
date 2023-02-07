import React from 'react';
import successfull from '../Images/successfull.png'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './PwdSuccessMsg.css'
const PwdSuccessMsg = () => {
  return (

    <>
    <AdminNavbar />
    <br/>
    <br/>
    <img src={successfull} alt="successfull"></img>
    <br/>

    <div id="successmsg"><span style={{"color":" #FF4D00"}}>Hii </span>Admin Sucessfully Change </div>
    <br/>
    <br/>
    <div id="successmsg">Your Password .</div>
    </>



  )
}

export default PwdSuccessMsg