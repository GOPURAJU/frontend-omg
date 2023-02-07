import "./ForgetPage.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import test18 from "../test18.png";
import test19 from "../test19.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApiService from "../Services/ApiServices";
import { useNavigate } from "react-router";

function ForgetPage() {
  const [phoNu, setPhoNu] = useState();
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  // const [password, setPassword] = useState(true);
  const [errors, setErrors] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOtp = (e) => {
    e.preventDefault();
    setMsg("");

    ApiService.sendOtp({ phoneNumber: phoNu })
      .then((res) => {
        // console.log(res.data);
        alert("Otp sent");
        // navigate("/");
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
        setMsg(
          error.response?.data?.errorMessage
            ? error.response.data.errorMessage
            : error.message
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("forget password caled");
    console.log(data);
    ApiService.ResetPassword(data)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("password changed succesfully");
        navigate("/");
      })
      .catch((error) => {
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };
  return (
    <div className="Auth-form-container">
      <img src={test19} alt="fruit" />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <Row className="mb-3">
            <h3 className="Auth-form-title">Forgot Password</h3>
            <Form.Group as={Col}>
              <Form.Label htmlFor="phone number">Phone Number</Form.Label>
              <Form.Control
                id="phone number"
                type="tel"
                message="please enter correct number"
                name="phoneNo"
                title="enter phone number like +919999999999"
                placeholder="enter phoneNumber"
                onChange= {(e)=>setPhoNu(e.target.value)}
                style={{"width":"100%"}}
              />
              <p className="text-danger">
                <b>{msg}</b>
              </p>
            </Form.Group>
            <Form.Group as={Col}>
              {/* <Form.Label>Getotp</Form.Label> */}
              <br></br>
              <Button
                type="submit"
                className=" btn-signup btn-success"
                disabled={status}
                onClick={handleOtp}
                style={{"marginTop":"20px"}}
              >
                Getotp
              </Button>
              {/* <Form.Control type="password" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="phone number">OTP</Form.Label>
              <Form.Control
                id="otp"
                type="text"
                message="please Enter Valid OTP here"
                name="otp"
                title="enter Valid OTP here"
                placeholder="enterValid OTP here"
                onChange={handleChange}
                style={{"width":"100%"}}
              />
            </Form.Group>
            <Form.Group as={Col}>
              {/* <Form.Label>Confirm Password</Form.Label> */}
              {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="New Password">New Password</Form.Label>
              <Form.Control
                id="New Password"
                type="password"
                message="please Enter New Password"
                name="newPassword"
                title="enterNew Password"
                placeholder="enter New Password"
                onChange= {handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              {/* <Form.Label>Confirm Password</Form.Label> */}
              {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
            </Form.Group>
          </Row>
          {/* <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label htmlFor="Confirm Password">Confirm Password</Form.Label>
              <Form.Control
                id="Confirm Password"
                type=" Password"
                message="please Enter Confirm Password"
                name="UName"
                title="enter Confirm Password"
                placeholder='enter Confirm Password'
              />
            </Form.Group>
            <Form.Group as={Col} >
              {/* <Form.Label>Confirm Password</Form.Label> */}
          {/* <Form.Control type="button" placeholder="Enter confirm password" /> */}
          {/* </Form.Group>
          // </Row> */}
          {/* <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div> */}
          <p className="forgot-password text-right mt-2">
            <Button className="btn-signup" type="submit" onClick={handleSubmit}>
              submit
            </Button>{" "}
            <Button as={Link} to="/" variant="danger">
              Cancel
            </Button>
          </p>
        </div>
      </form>
      <img src={test18}  alt="fruit"/>
    </div>
  );
}

export default ForgetPage;
