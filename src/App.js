import React from 'react';
// import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRouter from './Components/AnimatedRouter/AnimatedRouter';
import Footer from './Components/Footer/Footer';
import Cards from './Components/Card/Cards';







function App() {
  // var express = require('express');
  // var app = express();
  
  // var cors = require('cors');
  // var bodyParser = require('body-parser');
  
  // //enables cors
  // app.use(cors({
  //   'allowedHeaders': ['sessionId', 'Content-Type'],
  //   'exposedHeaders': ['sessionId'],
  //   'origin': '*',
  //   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   'preflightContinue': false
  // }));
  
  // require('./router/index')(app);
  return (
    <div class="page-container" >
    <div class="wrap-content" >
   
    <Router>
      

      {/* <Sidebar /> */}
      <AnimatedRouter/>
    </Router>
    </div>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Footer/>
    </div>

  ); 

}


export default App;
