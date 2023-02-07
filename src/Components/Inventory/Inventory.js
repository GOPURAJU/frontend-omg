import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Home from "../Images/home.png";
import { NavLink,Link } from "react-router-dom";
import './Inventory.css';
import Addproductinventory from "../Addproductinventory/Addproductinventory";
import Listofinventory from "../Listofinventory/Listofinventory";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";

const Inventory = () => {
  return (
    <>
    <AdminNavbar/>
    <div class="container">
  <div class="row">
    <div class="col-sm">
    
    </div>
    <div class="col-sm text" id="management">
    Grocery Inventory Management 
    </div>
    <div class="col-sm">
     
    </div>
  </div>
</div>
<br/>
<Tab.Container id="tabs-example" >
      {/* <Row>
        <Col sm={6}> */}
          {/* <Nav variant="pills" className="flex-row" >
            <Nav.Item>
              <Nav.Link eventKey="first">ADD PRODUCT TO INVENTORY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">LIST OF INVENTORY</Nav.Link>
            </Nav.Item>
          </Nav> */}
          {/* <div class="pl-5 pr-5 row" >
    <div class="col-sm-4 mt-3 p-2" id="ink">
    <Nav.Link eventKey="first"><button id="btnSearch" class="btn btn-light "  OnClick="btnSearch_Click" >ADD PRODUCT TO INVENTORY</button></Nav.Link>
    <Nav.Link eventKey="second"><button id="btnSearch" class="btn btn-light "  OnClick="btnClear_Click">LIST OF INVENTORY</button></Nav.Link>
     </div>
     </div> */}
     <div class="col-sm-3 btn-group d-flex justify-content-center" role="group" aria-label="Basic example" id="ink">

     <Nav.Link eventKey="first"><button id="Search" class="btn btn-light " >ADD PRODUCT TO INVENTORY</button></Nav.Link>
     <Nav.Link eventKey="second"><button id="Search" class="btn btn-light "  >LIST OF INVENTORY</button></Nav.Link>
  
</div>
        {/* </Col> */}
        {/* <Col sm={9}> */}
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Addproductinventory />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Listofinventory />
            </Tab.Pane>
          </Tab.Content>
        {/* </Col>
      </Row> */}
    </Tab.Container>
</>
  )
}

export default Inventory

