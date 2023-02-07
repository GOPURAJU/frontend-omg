import React, { useState, useEffect } from "react";
import ApiServices from "../Services/ApiServices";
import Micro from "../Images/whiteomglogo.png";
import profile from "../Images/adminProfile (2).png";
import Home from "../Images/home.png";
import GROCERY from "../Images/Vector(6).png";
import INVENTORY from "../Images/inventory.png";
import FINANCE from "../Images/Vector (2).png";
import CATEGORIES from "../Images/Vector (5).png";
import PRODUCTS from "../Images/product.png";
import VIEW from "../Images/Vector (3).png";
import Button from "react-bootstrap/Button";
import background from "../Images/background.jpg";
import moving from "../Images/moving.gif";
import iphone from "../Images/iphone.gif";
import "./Admin.css";
import { NavLink, Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import testt from "../testt.png";
import { useNavigate } from "react-router-dom";
import AddGrocery from "../AddGrocery/AddGrocery";

import DropdownButton from "react-bootstrap/DropdownButton";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import ListOfCategories from "../ListOfCategories/ListOfCategories";
import ListProducts from "../ListProducts/ListProducts";

function Admin() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);

  const [category, setCategory] = useState([]);
  const [show2, setShow2] = useState(false);
  const [status,setStatus]=useState(false);
  const [data,setData]=useState([]);



  useEffect(() => {
    ApiServices.getAllCategories()
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <nav class="navbar sticky-top navbar ">
        <img
          src={Micro}
          alt="logo"
          className="img-responsive ml-5"
          width="180px"
        />
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="bg-light">
            <img src={profile} alt="profile" style={{ width: "40px" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ borderRadius: "20px" }}>
            <div class="m-3">
              <div class="mt-3 mb-3" id="button1">
                <Link to="/AdminProfile">
                  <button
                    type="submit"
                    class="btn btn-bg-light ps-2 pe-2"
                    style={{
                      width: "15rem",
                      background: "rgba(19, 18, 18, 0.19)",
                      "border-radius": "25px",
                    }}
                  >
                    <span id="account">My Account</span>
                  </button>
                </Link>
              </div>
              <div class="mt-3 mb-3" id="button1">
                <Link to="/changePassword">
                  <button
                    class="btn btn-bg-light ps-2 pe-2"
                    style={{
                      width: "15rem",
                      background: "rgba(19, 18, 18, 0.19)",
                      "border-radius": "25px",
                    }}
                  >
                    <span id="account">Change Password</span>
                  </button>
                </Link>
              </div>
              <div class="mt-3 mb-3" id="button1">
                <button
                  class="btn btn-bg-light ps-2 pe-2"
                  style={{
                    width: "15rem",
                    background: "rgba(19, 18, 18, 0.19)",
                    "border-radius": "25px",
                  }}
                >
                  <span id="account">Help</span>
                </button>
              </div>

              <div class="mt-3 mb-3" id="button1">
                <Link to="/login">
                  {" "}
                  <button
                    class="btn btn-bg-light ps-2 pe-2"
                    style={{
                      width: "15rem",
                      background: "rgba(19, 18, 18, 0.19)",
                      "border-radius": "25px",
                    }}
                  >
                    <span id="account">Logout</span>
                  </button>
                </Link>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>{" "}
      </nav>
      <br />
     

      {/* <div style={{ backgroundImage: `url(${iphone})`, backgroundPosition: 'center',
       
        backgroundRepeat: 'no-repeat',
       }}
      > */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src={Home} alt="home" style={{ "margin-bottom": "-0.3em" }} />

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </div>
          <div class="col-sm text">Welcome to AdminDashboard</div>
          <div class="col-sm"></div>
        </div>
      </div>
      <br />


       <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddGrocery />
        </Modal.Body>
      </Modal>
   
      <Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>List Of Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mt-2 tableFixHead ">
            <table >
              <thead>
                <tr>
                  <th scope="col" class="fixed-cell">
                    CatId
                  </th>
                  <th scope="col" class="fixed-cell">
                    CatName
                  </th>
                </tr>
              </thead>
              <tbody className="table">
                {category.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.catId}</td>
                      <td>{item.catName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Modal.Body>
       
      </Modal> 
  
      
      <Modal show={show2} onHide={() => setShow2(false)} size="xl" >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
        
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListProducts />
        </Modal.Body>
      </Modal>

      <motion.div
        class="card-columns p-3 col d-flex justify-content-center"
        animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
      >
        <div
          class="card"
          onClick={() => setShow(!show)}
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <div
              className=" pt-5"
              style={{"textAlign":"center"}}
              id="grocery"
         
          
            >
              ADD GROCERY
            </div>
            <img src={GROCERY} alt="Grocery" className=" float-right" />
          </div>
        </div>

        <div
          class="card "
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <a href="/Inventory">
              <div className="pt-5" id="INVENTORY"  style={{"textAlign":"center"}}>
                INVENTORY
              </div>
            </a>

            <img src={INVENTORY} alt="INVENTORY" className="mt-2 float-right" />
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%,rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <div class="pt-5" id="INVENTORY"  style={{"textAlign":"center"}}>
              FINANCE
            </div>
            <img src={FINANCE} alt="FINANCE" className="float-right" />
          </div>
        </div>
      </motion.div>
      <motion.div
        class="card-columns p-3 col d-flex justify-content-center"
        animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
      >
        <div
          class="card"
          onClick={handleShow}
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            "margin-top": "-5px",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245)66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <div className=" pt-5" id="grocery" 
             style={{"textAlign":"center"}}
           >
              CATEGORIES
            </div>
            {/* <p class="card-text  pt-5"  id="grocery">CATEGORIES</p> */}
            <img src={CATEGORIES} alt="CATEGORIES" className="float-right" />
          </div>
        </div>

        <div
          class="card "
          onClick={() => setShow2(!show)}
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            "margin-top": "-5px",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%,rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <div className="pt-5" id="grocery"   
            style={{"textAlign":"center"}}
           >
              PRODUCTS
            </div>

            <img
              src={PRODUCTS}
              alt="PRODUCTS"
              id="product"
              className="float-right"
            />
          </div>
        </div>

        <div
          class="card"
          style={{
            width: "18rem",
            height: "10rem",
            "margin-right": "1em",
            "margin-top": "-5px",
            background:
              "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(245,245,245) 24.5%, rgb(245,245,245) 66%)",
            borderRadius: "10px",
          }}
        >
          <div class="card-body ">
            <div class=" pt-5 " id="grocery"  style={{"textAlign":"center"}}>
              ORDERS HISTORY{" "}
            </div>
            <img src={VIEW} alt="VIEW" id="order" className="float-right" />
          </div>
        </div>
      </motion.div>
      
      <br />
      <br />

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
{/* </div> */}

    </>
  );
}

export default Admin;
