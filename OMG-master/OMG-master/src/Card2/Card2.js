import React,{useState,useEffect} from "react";

import "./Card2.css";
import ApiServices from "../Components/Services/ApiServices";

import CART1 from "../Components/Images/CART1.png";
// import test5 from "./test5.jpg";

// import test4 from "./test4.jpg";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import veg from "../Components/Images/veg.png"
const Card2 = () => {

  const [products,setProducts]=useState([]);
  useEffect(() => {
    ApiServices.listofproducts().then((response)=>{
      setProducts(response.data)
        console.log(response.data);
 
    }).catch(error=>{
        console.log(error);
    })
  }, [])
  if(products.foodType === 'VEG'){
    return (
    <img src={veg}></img>
    )
  }


  return (
    <>
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

    {products.filter(category=>category?.categoriesEntity?.catName.includes('Vegetables')).map(filteredName=> (
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

    
    </>
  );
};

export default Card2;
