// import Table from 'react-bootstrap/Table';
import "./ListProducts.css";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataList from '../dataList/DataList';
import { useEffect, useState } from 'react';
import ApiServices from "../Services/ApiServices";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Update from "../Update/Update";

  

function ListProducts() {
  
    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
const [product,SetProduct]=useState([]);
const [status,setStatus]=useState(false);
const [data,setData]=useState([]);
const [updatedata,setUpdateData]=useState();

useEffect(() => {
  ApiServices.listofproducts()
    .then((res) => {
      // console.log(res.data);
      setData(res.data);
      setStatus(true);
    })
    .catch((err) => {alert(err.message)
      setStatus(false);
    });
}, []);

// console.table(data)
  return (
    <>
    <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title  id="example-custom-modal-styling-title">
            {/* Custom Modal Styling */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Update  data={updatedata}/>
        </Modal.Body>
      </Modal>
    <div className="mt-2 tableFixHead">
    <table>
      <thead>
        <tr>
          <th>
          Category name
          </th>
  
          <th>Category id</th>
          <th>Product id</th>
          <th>Product Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          
          <th>Status</th>
          <th>remarks</th>

        </tr>
      </thead>
        <tbody>
       
{ data.map((item,index) =>
    {
   return(
    <tr key={index}>
   <td>{item?.categoriesEntity?.catName}</td>
   <td>{item?.categoriesEntity?.catId}</td>
   <td>{item?.prodId}</td>
   <td>{item?.prodName}</td>
   <td><img src={item?.imageUrl} height="80" width="100" alt="product images"/></td>

   <td>{item?.productDescription}</td>
   <td>{item?.price}</td>
  
   {/* <td>{item?.qty}</td> */}
   <td>{item?.status}</td>
   
  <td> <button type="button" variant="primary" class="btn btn-success" onClick={() => {
    setUpdateData(item)
    setShow(true)}}>update</button>
  
  </td>
  
   </tr>
   )   
      
    }
  )
}
     </tbody>
    </table>
 
  </div>
  </>
  );
}

export default ListProducts;


