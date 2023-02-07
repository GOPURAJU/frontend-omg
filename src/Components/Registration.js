import './Registration.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import test16 from "./test16.png";
import test17 from "./test17.png"; 
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router";
import ApiService from "../Components/Services/ApiServices";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import './Registration.css'

function Registration() {
    const [msg,setMsg]= useState("");
    const navigate = useNavigate();
    const [data, setData] = useState({});
  
    

  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      // setData({...data,[e.target.name]:[e.target.value]})
    };
  const handleOtp=(e)=>{
    e.preventDefault();
    setMsg("");
    console.log(data);
    ApiService.sendOtp(data)
      .then((res) => {
        // console.log(res.data);
        alert("Otp sent");
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setMsg(error.response?.data?.errorMessage?error.response.data.errorMessage:error.message);

      });
  }
    const handleSubmit = (e) => {
      
      e.preventDefault();
      setMsg("");
      console.log(data);
      ApiService.registeration(data)
        .then((res) => {
          // console.log(res.data);
          alert("Registered successfully!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setMsg(error.response?.data?.errorMessage?error.response.data.errorMessage:error.message);
        });
    };
  
  return (
<div className="Auth-form-container">
<img  src={test17} className="imgrr"/>
<form onSubmit={handleSubmit} className="Auth-form">
  <div className="Auth-form-content">
    <h3 className="Auth-form-title">Registration page</h3>
    <div className="form-group mt-3">
      
      <Row className="mb-3">      
      <Form.Group as={Col} >
          <Form.Label>firstName</Form.Label>
         <Form.Control type="text"
         style={{"width":"100%"}}
         required
          placeholder="Enter FirstName" 
          name='firstName'  
          defaultValue={data.firstName}
              onChange={handleChange}
              id="firstName"
          />
     </Form.Group>

       <Form.Group as={Col} >
        <Form.Label>LastName</Form.Label>
          <Form.Control type="text" 
            style={{"width":"100%"}}
          placeholder="Enter LastName"
          required
          name="lastName"
          id="lastName"
          defaultValue={data.lastName}
              onChange={handleChange} />
        </Form.Group>
        </Row>
    </div>
    <div className="form-group mt-3">
      <label>Email id</label>
      <input
        type="email"
        required
        className="form-control mt-1"
        placeholder="Enter email id" 
        name='email'
        defaultValue={data.email}
        onChange={handleChange}
      />
    </div>
    {/* <Row className="mb-3">      
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>UserName</Form.Label>
         <Form.Control type="text" placeholder="Enter UserName" />
     </Form.Group>
</Row> */}
<Row className="mb-3"> 
              <Form.Group as={Col} >
                <Form.Label htmlFor="UserName">UserName</Form.Label>
                <Form.Control
                  id="UserName"
                  required
                  type="text"
                  message="please Enter UserName"
                  name="userName"      
                  title="enter UserName"
                  placeholder='enter UserName'
                  defaultValue={data.userName}
              onChange={handleChange}
                />
                </Form.Group>
                <Form.Group as={Col} >
        </Form.Group>
                </Row>
<Row className="mb-3">      
      <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
         <Form.Control type="password"
          required
          placeholder="Enter password"  
          name='password'
          id="password"
          defaultValue={data.password}
          onChange={handleChange}/>
     </Form.Group>

       <Form.Group as={Col} >
        <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" 
           required
          placeholder="Enter confirm password"
          name='confirmPassword' 
          id="password"
          defaultValue={data.confirmPassword}
          onChange={handleChange}/>
        </Form.Group>
        </Row>
        <Row className="mb-3">  
        {/* <Form.Group className="mb-3"> */}
        <Form.Group as={Col} >
                <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
                <Form.Control
                  name="dob"
                  required
                  id="dateOfBirth"
                  
                  type="date"
                  defaultValue={data.dob}
              onChange={handleChange}

                />
                </Form.Group>
                {/* <Form.Group className="mb-3 checkbox"> */}
                <Form.Group as={Col} >
                <Form.Label>Gender : </Form.Label>
         <br></br>
                <Form.Check
                  required
                  inline
                  label="Male"
                  name="gender"
                
                  type="radio"
                  onChange={(e)=>{
                    e.preventDefault();
                    setData((prevState) => ({
                      ...prevState,
                      ["gender"]: "male",
                    }));
                  }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  onChange={(e)=>{
                    e.preventDefault();
                    setData((prevState) => ({
                      ...prevState,
                      ["gender"]: "Female",
                    }));
                  }}
                />
             
              </Form.Group>
              </Row>
              <Row className="mb-3"> 
              <Form.Group as={Col} >
                <Form.Label htmlFor="phone number">Phone Number</Form.Label>
                <Form.Control
                  id="phonenumber"
                  type="tel"
                  required
                  message="please enter correct number"
                  name="phoneNumber"      
                  title="enter phone number like +919999999999"
                  placeholder='enter phoneNumber'
                  defaultValue={data.phoneNumber}
                  onChange={handleChange}
                />
              {/* <PhoneInput 
                        name="phoneNumber"
                        defaultCountry="IN"
                         placeholder="Enter phone number"
                         defaultValue={data.phoneNumber}
                         onChange={handleChange}/> */}
                </Form.Group>
                <Form.Group as={Col} >   
        {/* <Form.Label>Getotp</Form.Label> */}
        <br></br>
        <Button className="mt-3 btn-signup btn-success btn btn-primary" type="submit" onClick={handleOtp}>
               Getotp
              </Button>

          {/* <Form.Control type="password" placeholder="Enter confirm password" /> */}
        </Form.Group>
                </Row>
                <p className='text-danger'><b>{msg}</b></p>
                <Row className="mb-3"> 
              <Form.Group as={Col} >
                <Form.Label htmlFor="otp">Please Enter Valid Otp</Form.Label>
                <Form.Control
                  id="otp"
                 
                  type="text"
                  message="please Enter Validotp"
                  name="userOtp"    
                  required  
                  title="enter valid otp"
                  placeholder='enter valid otp'
                  defaultValue={data.userOtp}
                  onChange={handleChange}
                />
                </Form.Group>
                <Form.Group as={Col} >
        {/* <Form.Label>Confirm Password</Form.Label> */}
          {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
        </Form.Group>
                </Row>
    
    {/* <div className="d-grid gap-2 mt-3">
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div> */}
    <p className="forgot-password text-right mt-2">
     <Button className="btn-signup" type="submit">
                submit
              </Button>{" "}
              <Button as= {Link} to="/" variant="danger">
              Cancel
            </Button>
    </p>
  </div>
</form>

<img  src={test16} className="imgrr" />
</div>

)
}

export default Registration;