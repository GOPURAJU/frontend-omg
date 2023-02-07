import React, { useState, useEffect } from "react";
import "./Card5.css";

import { Nav } from "react-bootstrap";
import ApiServices from "../Services/ApiServices";
import UserNavbar from "../UserNavbar/UserNavbar";


const Card5 = () => {


  const [cartList, setcartList] = useState([]);
 
  useEffect(() => {
    ApiServices.getCartList()
      .then((response) => {
        setcartList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 


  const [count, setCount] = useState([]);

  useEffect(() => {
    ApiServices.getCartList()
      .then((response) => {
        setCount(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddProduct = (prodId, qty) => {
    console.log(prodId);
    console.log(qty);
    console.log(count);
    const products = {
      prodId: prodId,
      qty: qty,
    };
    ApiServices.addToCart(products).then((result) => {
      console.log(result.data);
      alert("item added");
      // setCount(count+1);
    });
    ApiServices.getCartList()
      .then((response) => {
        setCount(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
     <UserNavbar/>
      {/* <div
        class="mt-5 col-sm-3 btn-group d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Nav.Link>
          <button id="Search1" class="mr-2 ml-5 btn btn-light ">
          My Cart
          </button>
        </Nav.Link>
        <span class="mt-2 ">Your Cart having ( 04 items)</span> 

     
        <a href="/myOrders">
          <button id="Search1" class=" btn btn-light ">
          My Orders
          </button>
        </a>
      </div>  */}

      <div class="container mt-5 ">
        <div class="row">
          <div class="col">
            <Nav.Link>
              <button id="Search1" class="mr-2 ml-5 btn btn-light ">
                My Cart
              </button>
              Your Cart having ( 04 items)
            </Nav.Link>
          </div>
          <div class="col"></div>
          <div class="col mr-5">
            <a href="/myOrders">
              <button id="Search1" class=" btn btn-light ">
                My Orders
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr
        style={{
          "margin-top": " 1rem",
          " margin-bottom": "1rem",
          marginLeft: "350px",
          marginRight: "300px",
          border: " 0",
          "border-top": " 1px solid rgba(0, 0, 0, 0.1)",
        }}
      />
<div className="container">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table class="tableFixHead table">
          <thead>
            <tr>
              <th scope="col">ITEM DESCRIPTION</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">SUB TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <div>
              {cartList.map((item, index) => {
                return (
                  <tr key={index}>
                    {item.myCartItems.map((prodEntity, index) => {
                      return (
                        <div key={index}>
                          <td >
                           <div style={{"display":"flex"}}>
                           <img
                              style={{ width: "45px", height: "45px" }}
                              className="ml-2 rounded-circle"
                              src={prodEntity.productsEntity.imageUrl}
                            ></img>
                          {prodEntity.productsEntity.prodName}
                           </div>
                          </td>

                          <td>{prodEntity.productsEntity.price}</td>
                          <td>{prodEntity.productsEntity.qty}</td>
                        </div>
                      );
                    })}

                    <hr />
                  </tr>
                );
              })}
            </div>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Card5;
