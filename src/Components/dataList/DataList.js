import React, { useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

const DataList = () => {
  const [categorylist, setcategorylist] = useState([]);
  const [showPro, setShowPro] = useState(false);
  const [prodName, setprodName] = useState("");
  const [price, setprice] = useState(0);
  const [imageUrl, setimageUrl] = useState("");
  const [AddOnDate, setAddOnDate] = useState("");
  const [qty, setqty] = useState(0);
  // const [status, setstatus] = useState("");
  const [categoriesEntity, setcategoriesEntity] = useState({});
  const [datas, setDatas] = useState({});
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(false);
  const [product,setProducts]=useState({
    prodName:'',
    price:'',
    imageUrl:'',
   description:'',
    status:'',
    categoriesEntity:{
      catName:''
    }

  });

  // const data = {
  //   prodName: showPro,

  //   price: prodName,

  //   imageUrl: imageUrl,

  //   AddOnDate: AddOnDate,

  //   qty: qty,

  //   status: status,

  //   categoriesEntity: categoriesEntity,
  // };
  // console.log(data);

  useEffect(() => {
    ApiServices.getCategory()
      .then((res) => {
        console.log(res.data);
        setcategorylist(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
console.log(e.target.value);
console.log(e.target.name)
// alert("called");
    setProducts((prevState) => ({
      ...prevState,
      [name]: value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( product );
    ApiServices.addproducts(product)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("product added");
        // navigate("/");
      })
      .catch((error) => {
        alert("something went wrong ");
        setErrors(true);
        console.log(error);
      });
  
  };

  return (
    // <form onSubmit={handleSubmit}>
    <tr className="chocolate">
      <select name="catName" id="cars" required onChange={(e)=>{
        const { name, value } = e.target;
        setDatas((prevState) => ({
      ...prevState,
      
        "categoriesEntity": {
          [name]: value,
      }
      
      
    }));}}>
       <option value="">select</option>  
        {categorylist.map((it) => (
          <option value={it.catName} key={it.catName}
           >

            {it.catName}</option>
        ))}
      </select>
      <td>
        <input placeholder="Apple"  
        name="prodName" required
        onChange={handleChange} type="text" />
      </td>
      <td>
   
        <input placeholder="Apple"  
        name="description" required
        onChange={handleChange} type="text" />
             
    
      </td>
      <td>
        <input
          placeholder="199.00"
          name="price"
          type="number"
          required
          onChange={handleChange}
        />
      </td>

      <td>
        <input type="url" 
        name="imageUrl" required onChange={handleChange}/>
      </td>
      <td>
        <select name="status" id="cars" required
          onChange={handleChange}>
             <option value="">select</option>  
          <option value="available">Available</option>
          <option value="not available">not Available</option>        
          
        </select>
      </td>
      <td className="btn btn-success" >
       <button type="submit" onClick={handleSubmit} > add </button>
      </td>
    </tr>
    // </form>
  );
};

export default DataList;
