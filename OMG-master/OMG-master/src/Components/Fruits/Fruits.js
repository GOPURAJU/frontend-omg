import React, { useEffect, useState } from "react";
import UserNavbar from "../UserNavbar/UserNavbar";
import "./Fruits.css";
import ApiServices from "../Services/ApiServices";
import TableScrollbar from "react-table-scrollbar";

const Fruits = () => {
  const [products, setProducts] = useState([]);
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
  const showImage = (e) => {
    const prodName = e.target.value;
    console.log(prodName);
  };
  return (
    <>
      <UserNavbar />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="category1">Category </div>
            <div class="hr-theme-slash-2">
              <div class="mt-2 hr-line"></div>
            </div>
            <div className="mt-3 container" style={{ height: "50vh",width:"19vh",marginLeft:"-30px"}}>
              <TableScrollbar>
                <table>
                  <thead>
                    <tr>
                      <th scope="col" class="fixed-cell">
                        Fruits
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table">
                    {products.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{item.prodName}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TableScrollbar>
            </div>
          </div>
          <div class="col-sm">
            <img src=""></img>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default Fruits;
