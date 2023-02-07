import axios from "axios";

// const BASE_URL = "http://10.81.4.193:2022"; // srikanth pc

 const BASE_URL = "http://localhost:2022";
//const BASE_URL = "http://34.213.79.131:2022"; // pavan USERNAME:Rajesh@gmail.com password:rajesh

//post
const LOGIN_API_URL = `${BASE_URL}/api/login`;

//

const REGISTRATION_API_URL = `${BASE_URL}/api/user/register`;
// const FORGOT_API_URL = `${BASE_URL}/smsForgot/forgot-password`;

const FORGET_API_URL = `${BASE_URL}/api/user/sendOtp`; 
const RESETPASSWORD_API_URL = `${BASE_URL}/api/verify`;
const REG_OTP_API_URL = `${BASE_URL}/api/sendOtp`;
const ADDGROCERY_API_URL = `${BASE_URL}/api/admin/addCategory`;
const SEARCH_PRODUCTS=`${BASE_URL}/user/searchProduct`;
const ADDTO_CART=`${BASE_URL}/api/user/addToCart`
//put

//delete\

//dashboard
const PRODUCTS_LIST = `${BASE_URL}/api/admin/getAllProducts`;
const ADD_PRODUCTS = `${BASE_URL}/api/admin/addProducts`;
const ADD_CATEGORY = `${BASE_URL}/api/admin/getCategories`;
const LIST_OF_PRODUCTS = `${BASE_URL}/api/admin/getAllProducts`;
const ADMIN_PROFILE = `${BASE_URL}/api/admin/myProfile`;
const LIST_OF_CATEGORIES = `${BASE_URL}/api/admin/getCategories`;
//admin dashboard//INVENTORY

const ADD_PRODUCT_INVENTORY = `${BASE_URL}/api/admin/addInventory`;

const LIST_OF_INVETORY = `${BASE_URL}/api/admin/getAllInventory`;

//ADMIN DASHBOARD//UPDATEPRODUCTS
const UPDATE = `${BASE_URL}/api/admin/updateProd`;
const UPDATE_ADMINPROFILE = `${BASE_URL}/api/admin/update`;
const CHANGE_PASSWORD_ADMIN = `${BASE_URL}/api/admin/changePassword`;
const CART_LIST=`${BASE_URL}/api/user/getMyCartList`;
const UPDATE_CART_LIST=`${BASE_URL}`
export   function auth() {
  const token = sessionStorage.getItem("Access_Token");
  console.log(token);

  const config = {
    headers: {
    //  "Access-Control-Allow-Origin": "*",

    //  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

     // "Access-Control-Allow-Headers":"x-requested-with, authorization, Content-Type, Content-Length, Authorization, credential, X-XSRF-TOKEN",

      "Authorization": `Bearer ${token}`,
    },
  };
  console.log(config);
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  registeration(data) {
    return axios.post(REGISTRATION_API_URL, data);
  }

  forgetPwd(data) {
    return axios.post(FORGET_API_URL, data);
  }
  ResetPassword(data) {
    return axios.post(RESETPASSWORD_API_URL, data);
  }
  sendOtp(data) {
    return axios.post(REG_OTP_API_URL, data);
  }
  addgrocery(data) {
    return axios.post(ADDGROCERY_API_URL, data, auth());
  }
  productsList() {
    return axios.get(PRODUCTS_LIST,auth());
  }
  addproducts(data) {
    return axios.post(ADD_PRODUCTS, data, auth());
  }
  addToCart(data){
    return axios.post(ADDTO_CART, data, auth());
  }
  getCategory() {
    return axios.get(ADD_CATEGORY, auth());
  }
  getCartList(){
    return axios.get(CART_LIST,auth());
  }
  listofproducts() {
    return axios.get(LIST_OF_PRODUCTS);
  }
  getAdminProfile() {
    return axios.get(ADMIN_PROFILE, auth());
  }
  getAllCategories() {
    return axios.get(LIST_OF_CATEGORIES);
  }
  searchProductsByName(){
        return axios.get(SEARCH_PRODUCTS+'?query=${value}',auth())
  }
  update(data) {
    return axios.put(UPDATE, data, auth());
  }
  updateAdminProfile(data) {
    return axios.put(UPDATE_ADMINPROFILE, data, auth());
  }
  //admin//INVENTORY

  AddProductinventory(data) {
    return axios.post(ADD_PRODUCT_INVENTORY, data, auth());
  }

  Listofinventory() {
    return axios.get(LIST_OF_INVETORY, auth());
  }
  otp(data) {
    return axios.post(CHANGE_PASSWORD_ADMIN, data, auth());
  }
})();
