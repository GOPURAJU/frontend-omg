import React from "react";
import profile from "../Images/adminProfile (2).png";
import Micro from "../Images/whiteomglogo.png";
import Home from "../Images/home.png";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar">
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
                    <span id="account"> Logout</span>
                  </button>
                </Link>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>{" "}
      </nav>
      <br />
      <img
        src={Home}
        alt="home"
        style={{ marginLeft: "6rem", "margin-bottom": "-0.25rem" }}
      />
      <span>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/Admin"
          exact
        >
          Home
        </NavLink>
      </span>
    </>
  );
};

export default AdminNavbar;
