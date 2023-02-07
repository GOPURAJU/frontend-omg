// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './Login.css';
import test6 from "./test6.png";
import test from "./test.png"; 
import { Link } from "react-router-dom";
import { useState } from "react";
import ApiService from "../Components/Services/ApiServices";
import jwt from "jwt-decode";
import { useNavigate } from "react-router";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const ADMIN="ADMIN"
  const USER="USER"

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { userName: username, password: password };
    ApiService.login(loginData)
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("Access_Token", res.data.token.jwtToken);
        // const user = localStorage.getItem('user')
        const username = jwt(res.data.token.jwtToken).sub;
        console.log(res.data);
        sessionStorage.setItem("username", username);
        setErrors(false);
        alert(`Login Successful `);
        // navigate("/");
        let path = res.data.role==ADMIN?"/admin":"/"
        navigate(path)

      })
      .catch((error) => {
        console.log(error);
        setErrors(true);
      });   
  };
  return (                    
<div className="Auth-form-container">
<img  src={test6} alt="image"className="imghh"
                     />
<form className="Auth-form" onSubmit={handleSubmit}>
  <div className="Auth-form-content">
    <h3 className="Auth-form-title">Member Login</h3>
    {/* <form onSubmit={handleSubmit}> */}
    <div className="form-group mt-3">
      <label>UserName</label>
      
      <input
        type="text"
        className="form-control mt-1"
        placeholder="Enter userName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username"
        />
    
    </div>
    {errors && (
    <p className="text-danger mb-1">
              The provided credentials do not match our records.
            </p>
          )}
    <div className="form-group mt-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control mt-1"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="password"
      />
    </div>
    <div className="d-grid gap-2 mt-3">
      <button type="submit" className="btn btn-primary btn-success">
        Login
      </button>
     
    </div>
    <Link to="/forgetpage" className="forgot-password text-right">
            forget password?
          </Link> / 
          <Link to="/Registration" className="forgot-password text-right">
            SignUp
          </Link>         
  </div>
</form>
<img  src={test} alt="image"className="imghh"
                    />
</div>
)
}

export default Login;