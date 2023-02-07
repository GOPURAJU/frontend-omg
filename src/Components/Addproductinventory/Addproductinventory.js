
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

import ApiServices from "../Services/ApiServices";
import './Addproductinventory.css'

function Addproductinventory() {
  const [datas, setDatas] = useState();
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
const handleChange = (e) => {
    const { name, value } = e.target;

    setDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ datas });
    ApiServices.AddProductinventory(datas)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("product added");
        // navigate("/");
      })
      .catch((error) => {
        alert("something went wrong");
        setErrors(true);
        console.log(error);
      });
    setStatus(false);
  };

  return (
   
    <div className=" Auth-form-container" style={{"marginTop":"-130px","margin-left": "-400px"}}>
      <form className="Auth-form" id="form">
        <div className="Auth-form-content">
          {/* <h3 className="Auth-form-title">Sign In</h3> */}
          <div className="form-group mt-3">
            <label style={{"font-family": "monospace"}} id="name">PRODUCT NAME</label>
            <input
              type="text"
              id="productName"
              className="form-control mt-1"
              placeholder="Enter text"
              name="productName"
              onChange={handleChange}
            />
          </div>
          <label style={{"font-family": "monospace"}} id="name">PRODUCT DESCRIPTION</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"  onChange={handleChange}></textarea>
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div> */}
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label style={{"font-family": "monospace"}} id="name">QUNATITY IN STOCK</Form.Label>
              <Form.Control
           id="quantity"
                type="number"
                required
                placeholder=""
                name="quantity"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label  style={{"font-family": "monospace"}} id="name">MRP or UNIT PRICE</Form.Label>
              <Form.Control type="" required placeholder="" name="number"   id="quantity"   onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label id="name" style={{"font-family": "monospace"}}>MFG DATE</Form.Label>
              <Form.Control type="date" required placeholder="" name="date"   id="quantity"    onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label id="name" style={{"font-family": "monospace"}}>EXP DATE</Form.Label>
              <Form.Control type="date" required placeholder="" name="date"   id="quantity"   onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label id="name" style={{"font-family": "monospace"}}>Purchace Price / UNIT</Form.Label>
              <Form.Control type="text" required placeholder="" name=""   id="quantity"   onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label id="name" style={{"font-family": "monospace"}}>INVENTORY VALUE </Form.Label>
              <Form.Control className="mt-4" type="text" required placeholder="" name=""   id="quantity"  onChange={handleChange}/>
            </Form.Group>
          </Row>
          <div  class="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="pl-5 pr-5 pt-3 pb-3 btn btn-light"
              id="submit"
              
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
   
  );
}

export default Addproductinventory;
