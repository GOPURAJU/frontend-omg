import React, { useState, useEffect } from "react";
import './UserNavbar.css'
import { NavLink, Link } from "react-router-dom";
import Micro from "../Images/whiteomglogo.png";
import circle from "../Images/search.gif";
import CART1 from "../Images/CART1.png";
import basket from "../Images/cart.png";
import { Nav } from "react-bootstrap";
import ApiServices from "../Services/ApiServices";
import OMGIMAGE from "../Images/omglogo.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import profile from "../Images/adminProfile (2).png";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

const UserNavbar = () => {
  const token = sessionStorage.getItem("Access_Token");
  const [search, setNewSearch] = useState("");
  const [result1, setResult] = useState([]);
  const [category, setCategory] = useState([]);
  const [cartList, setcartList] = useState([]);
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    ApiServices.getAllCategories().then((res) => {
      console.log(res.data);
      setCategory(res.data);
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
    <><nav
      class="navbar fixed-top navbar-light bg-light justify-content-between"
      id="navbar"
    >
      <img
        src={OMGIMAGE}
        alt="logo"
        className="img-responsive ml-5"
        width="180px" />

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
          }} />

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
                          className="ml-2 rounded-circle" />
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
                          <MDBBtn
                            color="warning"
                            style={{ borderRadius: "15px" }}
                          >
                            ADD
                          </MDBBtn>
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
      <img src={circle} class="Gif"></img>

      <form class="form-inline">
        {/* <Link as={Link} to="/login" class="login">
      {token ? "Logout" : "Login"}
    </Link> */}
        <Dropdown as={ButtonGroup} class="mr-2">
          <Dropdown.Toggle variant="bg-light">
            <img src={profile} alt="profile" style={{ width: "40px" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ borderRadius: "20px" }}>
            <div class="m-3">
              <div class="mt-3 mb-3" id="button2">
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
              <div class="mt-3 mb-3" id="button2">
                <Link to="/changePassword">
                  <button
                    class="btn btn-bg-light ps-2 pe-2"
                    style={{
                      width: "15rem",
                      background: "rgba(19, 18, 18, 0.19)",
                      "border-radius": "25px",
                    }}
                  >
                    <span id="account">My Cart</span>
                  </button>
                </Link>
              </div>
              <div class="mt-3 mb-3" id="button2">
                <button
                  class="btn btn-bg-light ps-2 pe-2"
                  style={{
                    width: "15rem",
                    background: "rgba(19, 18, 18, 0.19)",
                    "border-radius": "25px",
                  }}
                >
                  <span id="account">My Orders</span>
                </button>
              </div>

              <div class="mt-3 mb-3" id="button2">
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
        {count.map((i) => (
          <span className="ml-2 cart">{i.totalItems}</span>
        ))}
        <span>
          <NavLink to="/card5">
            <img src={basket} class="basket"></img>
          </NavLink>
        </span>
      </form>
    </nav><br></br><br /><br /><br /><div
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
        <a href="/home">
          <button id="Search1" class="ml-2 btn btn-light ">
            Home
          </button>
        </a>
      </div><br /></>
  )
}

export default UserNavbar