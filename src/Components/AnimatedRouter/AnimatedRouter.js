import React from 'react';

import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { NavigationBar } from '../NavigationBar';
import Login from '../Login';
import Registration from '../Registration';
import ForgetPage from '../ForgetPage/ForgetPage';
import Admin from '../Admin/Admin';
// import ApiServices from './Components/Services/ApiServices';
import AddGrocery from '../AddGrocery/AddGrocery';
// import { Tables } from './Components/Tables/Tables';
import AddProducts from '../AddProducts/AddProducts';
import ListProducts from '../ListProducts/ListProducts';
import UserDashboard from '../UserDashboard/UserDashboard';
import Footer from '../Footer/Footer';

import PersonalDetails from '../PersonalDetails/PersonalDetails';
import EditProfile from '../EditProfile/EditProfile';
import MyCart from '../MyCart/MyCart';
import  DeliveryAddress  from '../DeliveryAddress/DeliveryAddress';

import ButtonCustomExample from '../Dropdown/dropdown';
import AdminAccount from '../AdminAccount/AdminAccount'
import Update from '../Update/Update';

import  Inventory  from '../Inventory/Inventory';
import Addproductinventory from '../Addproductinventory/Addproductinventory';
import Listofinventory from '../Listofinventory/Listofinventory';
import Password from '../Password/Password';
import UpdateAdminProfile from '../UpdateAdminProfile/UpdateAdminProfile';
import {AnimatePresence} from 'framer-motion'
import PwdSuccessMsg from '../PwdSuccessMsg/PwdSuccessMsg';
import Cards from '../Card/Cards';
import Card5 from '../Card5/Card5';
import Fruits from '../Fruits/Fruits';




const AnimatedRouter = () => {
    const location=useLocation();
  return (
  
  
<AnimatePresence>


    <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<NavigationBar />} />
    <Route exact path="/home" element={<NavigationBar />} />
     <Route path='/login' element={<Login />} />
     <Route path='/Registration' element={<Registration />} />
     <Route path='/ForgetPage' element={<ForgetPage />} />
     <Route path='/Admin' element={<Admin />} />
     {/* <Route path='/ApiServices' element={<ApiServices />} /> */}
     <Route path='/AddGrocery' element={<AddGrocery />} />
     {/* <Route path='/Tables' element={<Tables />} /> */}
     <Route path='AddProducts' element={<AddProducts />} />
     <Route path='ListProducts' element={<ListProducts />} />
     <Route path='UserDashboard' element={<UserDashboard />} />
     <Route path="Footer" element={<Footer />} />
   
     <Route path="PersonalDetails" element={<PersonalDetails />} />
     <Route path="/EditProfile" element={<EditProfile />} />
     <Route path='/MyCart' element={<MyCart />} />
     <Route path='/DeliveryAddress' element={<DeliveryAddress />} />
     <Route path='/dropdown'  element={<ButtonCustomExample/>}/>
     <Route path='/AdminProfile' element={< AdminAccount/>}/>
     <Route path='/update' element={<Update/>}/>
     <Route path='/Inventory' element={<Inventory/>}/>
     <Route path='/Addproductinventory' element={<Addproductinventory/>}/>
     <Route path='/Listofinventory' element={<Listofinventory/>}/>
     <Route path='/changePassword' element={<Password/>}/>
     <Route path='/UpdateAdminProfile' element={<UpdateAdminProfile/>}/>
     <Route path='/successMsg' element={<PwdSuccessMsg/>}/>
     <Route path='/Fruits' element={<Fruits/>} />
     <Route path='/card5' element={<Card5/>} />

   

   </Routes>
   </AnimatePresence>

  )
}

export default AnimatedRouter