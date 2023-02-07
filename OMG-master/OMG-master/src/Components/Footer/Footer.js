import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Footer/Footer.css";
import footerLocation from "../Images/footerlocation.gif";
import OMGIMAGE from "../Images/omglogo.png";
import address from "../Images/address.png";
import mail from "../Images/mail.png";
const Footer = () => {
  return (
    <>
      <footer class="bg-white text-white text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0"></div>

            <div class="  mt-5 col-lg-3 col-md-6 mb-4 mb-md-0" id="easy">
              <span id="select">"</span>Easy To Select{" "}
              <span id="get">Easy To Get</span>
              <span id="select">"</span>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img
                src={footerLocation}
                alt="footerLocation"
                style={{ width: "200px" }}
              ></img>
            </div>
          </div>
        </div>
        {/* 
        <div
          class="text-center p-3"
          style={{ "background-color": " rgba(0, 0, 0, 0.2);" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div> */}
      </footer>
      <footer
        class=" text-white text-center text-lg-start"
        style={{
          background:
            "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
        }}
      >
        <div class="container p-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <img
                class="mr-3"
                src={OMGIMAGE}
                alt="logo"
                style={{ width: "200px" }}
              ></img>

              <div id="omgabbre">Online Market For Groceries</div>
              <div id="deliverquote">“Delivering Goodness to your Home”</div>
            </div>

            <div class="  col-lg-3 col-md-6 mb-4 mb-md-0">
              {/* <h5 class="text-uppercase">Support</h5> */}

              <ul class="list-unstyled mb-0" id="styling">
                <img src={mail} alt="Image" />
                <div class="support">For any Queries</div>
                <span class="online">onlinesupermarket37@gmail.com</span>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p id="omgabbre">Office Address </p>

              <p align="center">
                <img src={address} class="ml-2" alt="Image" />
              </p>

              <ul class="list-unstyled mb-0">
                <li>
                  <div id="deliverquote">
                    ABC Company Pvt Ltd 21st Floor, Block-3 Wing-D, NSL Arena
                    Centre IDA Uppal, Telangana - 500040
                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
          style={{ "background-color": " rgba(0, 0, 0, 0.2);" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            omg.com
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
