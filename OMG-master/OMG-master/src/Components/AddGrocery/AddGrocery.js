import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import "./AddGrocery.css";
import ReactVirtualizedTable from "../Tables/Tables";
import ApiService from "../Services/ApiServices";
import { useNavigate } from "react-router";
import AddProducts from "../AddProducts/AddProducts";
import ListProducts from "../ListProducts/ListProducts";

function AddGrocery() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [Data, setData] = useState(false);
  const [datas, setDatas] = useState('');
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const [category,setCategory]=useState('');



  

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category });
    ApiService.addgrocery(category)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("category added");
        // navigate("/");
      })
      .catch((error) => {
        alert("something went wrong");
        setErrors(true);
        console.log(error)
      });
    setStatus(false);
    
  };

  return (
    <div className="grocery">
      <DropdownButton
        id="primary"
        title="Categories"
        className="mb-2 px-1 "
  
      >
        <div className="category">
          <Button
            onClick={() => {
              // setState(!state);
              setOpen(!open);
              setState(false);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            id="primary"
          >
            {" "}
            Add Categories
          </Button>{" "}
          <Button
            onClick={() => {
              setState(!state);
              setOpen(false);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={state}
            id="primary"
          >
            List of Categories
          </Button>
          {state && <ReactVirtualizedTable />}
          <div className="mt-2 subsection">
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card body className="cardbody">
                  <label for="catName"> Category name</label>
                  <input
                    type="text"
                    name="catName"
                    className="form-control mt-1"
                    placeholder="Enter text"
                    onChange={handleChange}
                  />
                  <p className="forgot-password text-right mt-2">
                    <Button
                      className="btn-signup"
                      type="submit"
                      onClick={handleSubmit}
                      id="secondary"
                    >
                      submit
                    </Button>{" "}
                  </p>
                  {/* <button>Submit</button> */}
                </Card>
              </div>
            </Collapse>
          </div>
        </div>
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title="Products">
        <div className="category">
          <Button
            onClick={() => {
              setState(!state);
              setData(!Data);
              // setState(false);
              // setShowPro(true);
            
            }}
            aria-controls="example-collapse-text"
            aria-expanded={Data}
            id="primary"
          >
            {" "}
            Add Products{" "}
          </Button>{" "}
          <Button
            onClick={() => {
              setState(!state);
              setOpen(false);
            
            }}
            aria-controls="example-collapse-text"
            aria-expanded={!state}
            id="primary"
          >
            List of Products
          </Button>
          {!state && <AddProducts />}
          {state && <ListProducts />}
          <div className="subsection">
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card body className="cardbody">
                  <label> Category name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter text"
                  />
                  <p className="forgot-password text-right mt-2">
                    <Button className="btn-signup" type="submit">
                      submit
                    </Button>{" "}
                  </p>
                  {/* <button>Submit</button> */}
                </Card>
              </div>
            </Collapse>
          </div>
        </div>
      </DropdownButton>
      {/* <Tables /> */}
      {/* <Dropdown.Item href="login">Add products</Dropdown.Item>
                <Dropdown.Item href="#/action-2">list of products</Dropdown.Item> */}
    </div>
  );
}

export default AddGrocery;
