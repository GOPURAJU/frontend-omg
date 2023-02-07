import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Cards from "./Card/Cards";
import Micro from "./Images/whiteomglogo.png";
import circle from "./Images/search.gif";
import CART1 from "./Images/CART1.png";

import basket from "./Images/cart.png";
import Carsouel from "./Carsouel";
import { NavLink, Link } from "react-router-dom";
import "./NavigationBar.css";
import profile from "./Images/adminProfile (2).png";
import ApiServices from "./Services/ApiServices";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Nav } from "react-bootstrap";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Caurosel3 from "./Caurosel3/Caurosel3";
import Card4 from "./Card4/Card4";
import veg from "../Components/Images/veg.png";
import nonveg from "../Components/Images/nonveg.png";
import vegan from "../Components/Images/vegan.png";
import external from "../Components/Images/external.png";

export const NavigationBar = () => {
  const token = sessionStorage.getItem("Access_Token");
  console.log(token);
  const [products, setProducts] = useState([]);
  const [result1, setResult] = useState([]);
  const [search, setNewSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [food, setFood] = useState();
 


  const searchCategory = (e) => {
    const selectedId = e.target.value;
    console.log(selectedId);
  };

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
  const [isFavorite, setIsFavorite] = useState({});
 


  const handleAddProduct = (prodId, qty) => {
    const id =prodId ;

    console.log(id);
    setIsFavorite((prev) => ({
      ...prev,
      [id]: !prev[id] + 1,
    }));
    console.log(prodId);
    console.log(qty);
    console.log(count);
    const products = {
      prodId: prodId,
      qty: qty,
    };
    ApiServices.addToCart(products)

      .then((result) => {
        console.log(result.data);
        // setStatus(true);

        ApiServices.getCartList().then((response) => {
          setCount(response.data);
          console.log(response.data);
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ApiServices.listofproducts()
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = async (e) => {
    setNewSearch(e.target.value);
    let key = e.target.value;
    let result = await fetch(
      `http://10.81.4.242:2022/api/user/searchProduct?query=${key}`
    );
    result = await result.json();
    console.log(result);
    if (result) {
      setResult(result);
    }
  };
  const filtered =
    search.length === 0
      ? null
      : result1.filter((item) =>
          item.prodName.toLowerCase().includes(search.toLowerCase())
        );

  useEffect(() => {
    ApiServices.listofproducts()

      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    ApiServices.getAllCategories().then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  }, []);
  return (
    <>
      <nav class="navbar fixed-top navbar-light bg-light justify-content-between">
        <img
          src={Micro}
          alt="logo"
          className="img-responsive ml-5"
          width="180px"
        />

        <div className="search-bar-dropdown align-items-center">
          <input
            type="text"
            class="form-control"
            value={search}
            placeholder="Search for Groceries......"
            onChange={handleChange}
            style={{
              width: "300%",
              background: " #ffffff",
              border: "1px solid rgb(234 154 14 / 56%)",
              borderRadius: " 30px",
              marginTop: "10px",
            }}
          />

          <MDBTable align="middle">
            <tr className="tableRow">
              {/* <Scrollbars style={{ width: 750, height: 500 }}> */}
              <td>
                <div
                  class="table-wrapper-scroll-y my-custom-scrollbar"
                  style={{ height: " 490px" }}
                >
                  {!filtered ? (
                    <></>
                  ) : (
                    filtered.map((item) => {
                      return (
                        <div
                          className=" d-flex align-items-center"
                          style={{
                            background: "white",

                            border: " 1px solid #e78b06",
                            "   box-shadow": "0px 4px 4px rgb(0 0 0 / 25%)",
                            borderRadius: "5px",
                            height: "60px",
                            width: "580px",
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt=""
                            style={{ width: "45px", height: "45px" }}
                            className="ml-2 rounded-circle"
                          />
                          <div className="ms-3">
                            <p
                              className="fw-bold mb-1 mr-3 mt-4"
                              style={{ width: "100px", height: "45px" }}
                            >
                              {item.prodName}
                            </p>
                            <p
                              className="text-muted mb-0"
                              style={{ width: "200px", height: "45px" }}
                            >
                              {item.productDescription}
                            </p>
                          </div>
                          <div className="ms-3 mt-4">
                            <p
                              className="fw-bold mb-1 mr-3"
                              style={{ width: "60px", height: "45px" }}
                            >
                              Rs:{item.price}
                            </p>
                            {/* <MDBBtn
                              color="warning"
                              style={{ borderRadius: "15px" }}
                            >
                              ADD
                            </MDBBtn> */}
                               <button
                                  type="button"
                                  class=" btn btn-warning"
                                  id="warning"
                                 
                                  onClick={() =>handleAddProduct(
                                    item.prodId,
                                   1
                                  )}
                                >
                                  {isFavorite[item.prodId]
                                    ?  <div>
                                    <button
                                      onClick={() =>
                                        onRemove(item.prodId)
                                      }
                                      className="remove"
                                    >
                                      -
                                    </button>
                                    <span className="p-1">
                                      {item.qty}
                                    </span>

                                    <button
                                      onClick={() => handleAddProduct(
                                        item.prodId,
                                      1
                                      )}
                                      className="add"
                                    >
                                      +
                                    </button>
                                  </div>
                                    : "ADD"}
                                 
                                </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </td>
              {/* </Scrollbars> */}
            </tr>
          </MDBTable>
        </div>
        <img src={circle} class="searchGif"></img>

        <form class="form-inline">
          <Link as={Link} to="/login" class="login">
            {token ? "Logout" : "Login"}
          </Link>

          {count.map((i) => (
            <span className="ml-2 cart">{i.totalItems}</span>
          ))}
          <span>
            <NavLink to="/card5">
              <img src={basket} class="basket"></img>
            </NavLink>
          </span>
        </form>
      </nav>

      <br></br>

      <br />
      <br />
      <br />

      <div
        class="mt-2 col-sm-3 btn-group d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <div class="mr-2 dropdown">
          <button
            type="button"
            id="Search2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {category.map((item1) => (
              <a class="dropdown-item" href={item1.catName}>
                {" "}
                {item1.catName}
              </a>
            ))}
          </div>
        </div>

        <Nav.Link>
          <button id="Search1" class="mr-2 btn btn-light ">
            About us
          </button>
        </Nav.Link>
        <Nav.Link>
          <button id="Search1" class="btn btn-light ">
            Contact us
          </button>
        </Nav.Link>
        <Nav.Link to="/home">
          <button id="Search1" class="ml-2 btn btn-light ">
            Home
          </button>
        </Nav.Link>
      </div>

      <br />

      <Carsouel />
      <br />
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="flex">
              {/* item?.categoriesEntity?.catName */}

              {products
                .filter((category) =>
                
                 (category?.categoriesEntity?.catName ==="Meat and fish"|| category?.categoriesEntity?.catName ==="Fruits"||category?.categoriesEntity?.catName ==="Bread and baked goods" )
                )
                .map((filteredName) => (
                  //  {products.map((item, i) => {

                  <div style={{ width: "25%" }}>
                    <SwiperSlide>
                      {" "}
                      <div class="col mb-4">
                        <div class="card" style={{ background: "#F5F5F5" }}>
                          <div class="view overlay">
                            <div key={filteredName.prodId}></div>
                            <img
                              class="card-img-top"
                              src={filteredName.imageUrl}
                              alt="Card image cap"
                              style={{ borderRadius: "30px" }}
                            />
                            <a href="#!">
                              <div class="mask rgba-white-slight"></div>
                            </a>
                          </div>

                          <div class="card-body">
                            <div
                              id="productname"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              {filteredName.prodName}
                            </div>
                            <br />
                            <p id="productdes">
                              {filteredName.productDescription}
                            </p>

                            <br />

                            {filteredName.foodType === "VEG" && (
                              <img src={veg} style={{ width: "20%" }}></img>
                            )}
                               {filteredName.foodType === "NONVEG" && (
                              <img src={nonveg} style={{ width: "20%" }}></img>
                            )}
                               {filteredName.foodType === "VEGAN" && (
                              <img src={vegan} style={{ width: "20%" }}></img>
                            )}

                            <div
                              class="card"
                              style={{
                                background: "white",
                                "border-radius": "10px",
                                width: " 175px",
                                marginLeft: " -21px",
                              }}
                            >
                              <div
                                class="card-body"
                                style={{ width: "210px", height: "124px" }}
                              >
                                <div
                                  id="price"
                                  style={{ fontFamily: "sans-serif" }}
                                >
                                  Rs :{filteredName.price}
                                </div>
                                {/* <div id="status" style={{"fontFamily":"sans-serif" }}>Status:{filteredName.status}</div> */}

                                {filteredName.status === "Available" && (
                                  <div
                                    id="status"
                                    style={{
                                      color: "green",
                                      "font-size": " 13px",
                                      "font-family": "sans-serif",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "black",
                                        "font-size": " 13px",
                                        "font-family": "sans-serif",
                                      }}
                                    >
                                      Status:{" "}
                                    </span>
                                    {filteredName.status}
                                  </div>
                                )}
                                {filteredName.status === "NotAvailable" && (
                                  <div
                                    id="status"
                                    style={{
                                      color: "red",
                                      "font-size": " 13px",
                                      "font-family": "sans-serif",
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "black",
                                        "font-size": " 13px",
                                        "font-family": "sans-serif",
                                      }}
                                    >
                                      Status:{" "}
                                    </span>
                                    {filteredName.status}
                                  </div>
                                )}

                                <button
                                  type="button"
                                  class="mt-4 ml-5 btn btn-warning"
                                  id="warning"
                                 
                                  onClick={() =>handleAddProduct(
                                    filteredName.prodId,
                                    filteredName.qty
                                  )}
                                >
                                  {isFavorite[filteredName.prodId]
                                    ?  <div>
                                    <button
                                      onClick={() =>
                                        onRemove(filteredName.prodId)
                                      }
                                      className="remove"
                                    >
                                      -
                                    </button>
                                    <span className="p-1">
                                      {filteredName.qty}
                                    </span>

                                    <button
                                      onClick={() => handleAddProduct(
                                        filteredName.prodId,
                                        filteredName.qty
                                      )}
                                      className="add"
                                    >
                                      +
                                    </button>
                                  </div>
                                    : "ADD"}
                                 
                                </button>
                             
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
            </div>
          </Swiper>
        </div>
      </div>

      {/* <Cards /> */}
      <div class="row" >
          <div class="col-md-6 offset-md-3">
          <Swiper
      spaceBetween={10}
      slidesPerView={4}
      // centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
   <div className="flex">
   {/* item?.categoriesEntity?.catName */}

    {products.filter(category=>
   (category?.categoriesEntity?.catName ==="Vegetables"|| category?.categoriesEntity?.catName ==="Dairy"||category?.categoriesEntity?.catName ==="Oilgrocery" ||category?.categoriesEntity?.catName ==="Baby products")
   )
   .map((filteredName) => (
    //  {products.map((item, i) => {
            
 
      <div style={{ width: "25%" }}>
      <SwiperSlide>
        {" "}
        <div class="col mb-4">
          <div class="card" style={{ background: "#F5F5F5" }}>
            <div class="view overlay">
              <div key={filteredName.prodId}></div>
              <img
                class="card-img-top"
                src={filteredName.imageUrl}
                alt="Card image cap"
                style={{ borderRadius: "30px" }}
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body">
              <div
                id="productname"
                style={{ fontFamily: "sans-serif" }}
              >
                {filteredName.prodName}
              </div>
              <br />
              <p id="productdes">
                {filteredName.productDescription}
              </p>

              <br />

              {filteredName.foodType === "VEG" && (
                <img src={veg} style={{ width: "20%" }}></img>
              )}
                 {filteredName.foodType === "NONVEG" && (
                              <img src={nonveg} style={{ width: "20%" }}></img>
                            )}
                              {filteredName.foodType === "VEGAN" && (
                              <img src={vegan} style={{ width: "20%" }}></img>
                            )}
                                    {filteredName.foodType === "NOTSWALLOWABLE" && (
                              <img src={external} style={{ width: "20%" }}></img>
                            )}

              <div
                class="card"
                style={{
                  background: "white",
                  "border-radius": "10px",
                  width: " 175px",
                  marginLeft: " -21px",
                }}
              >
                <div
                  class="card-body"
                  style={{ width: "210px", height: "124px" }}
                >
                  <div
                    id="price"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Rs :{filteredName.price}
                  </div>
                  {/* <div id="status" style={{"fontFamily":"sans-serif" }}>Status:{filteredName.status}</div> */}

                  {filteredName.status === "Available" && (
                    <div
                      id="status"
                      style={{
                        color: "green",
                        "font-size": " 13px",
                        "font-family": "sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          "font-size": " 13px",
                          "font-family": "sans-serif",
                        }}
                      >
                        Status:{" "}
                      </span>
                      {filteredName.status}
                    </div>
                  )}
                  {filteredName.status === "NotAvailable" && (
                    <div
                      id="status"
                      style={{
                        color: "red",
                        "font-size": " 13px",
                        "font-family": "sans-serif",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          "font-size": " 13px",
                          "font-family": "sans-serif",
                        }}
                      >
                        Status:{" "}
                      </span>
                      {filteredName.status}
                    </div>
                  )}

                  <button
                    type="button"
                    class="mt-4 ml-5 btn btn-warning"
                    id="warning"
                   
                    onClick={() =>handleAddProduct(
                      filteredName.prodId,
                      filteredName.qty
                    )}
                  >
                    {isFavorite[filteredName.prodId]
                      ?  <div>
                      <button
                        onClick={() =>
                          onRemove(filteredName.prodId)
                        }
                        className="remove"
                      >
                        -
                      </button>
                      <span className="p-1">
                        {filteredName.qty}
                      </span>

                      <button
                        onClick={() => handleAddProduct(
                          filteredName.prodId,
                          filteredName.qty
                        )}
                        className="add"
                      >
                        +
                      </button>
                    </div>
                      : "ADD"}
                   
                  </button>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </div>
             

 ))}

  </div>
  </Swiper>
  </div>
            </div>  
      {/* <Card2 /> */}
      
      <div class="title1">
        Fruits <span class="dot"></span> DairyProducts <span class="dot"></span>{" "}
        Vegetables <span class="dot"></span> Rice <span class="dot"></span>{" "}
        DryFruits <span class="dot"></span> Meat
      </div>
      <hr
        style={{
          "margin-top": " 1rem",
          " margin-bottom": "1rem",
          marginLeft: "250px",
          marginRight: "250px",
          border: " 0",
          "border-top": " 1px solid rgba(0, 0, 0, 0.1)",
        }}
      />
      <Card1 />
      <hr
        style={{
          "margin-top": " 1rem",
          " margin-bottom": "1rem",
          marginLeft: "250px",
          marginRight: "250px",
          border: " 0",
          "border-top": " 1px solid rgba(0, 0, 0, 0.1)",
        }}
      />
      <br />
      <br />

      <Caurosel3 />

      <br />
      <br />
      <div class="title1">Your Daily Staples</div>
      <hr
        style={{
          "margin-top": " 1rem",
          " margin-bottom": "1rem",
          marginLeft: "250px",
          marginRight: "250px",
          border: " 0",
          "border-top": " 1px solid rgba(0, 0, 0, 0.1)",
        }}
      />
      <br />
      <Card4 />
      <br />
    </>
  );
};
