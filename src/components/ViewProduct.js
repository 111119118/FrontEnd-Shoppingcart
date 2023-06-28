// import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {  Container,  Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
// import Footer from "./Footer/Footer";





function ViewProduct() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const fetchProductById = () => {
      axios
        .get("http://localhost:9091/product/get/" + id)
        .then((resp) => setProduct(resp.data));
    };
    useEffect(fetchProductById, []);
  return (
  
   
    <Row className="viewproducts">
      <Navbar/>
      <div>
        <h2> <b style={{ color: "blue" }}>Product Details</b></h2>
        
<br/>
        {product !== null && (
          <div>
             <img className="image" src={product.image} />
             <br/>
            <h5 >
           Product ID: <b style={{ color: "rgb(28, 200, 79)" }}>  {product.productId}</b>
            </h5 >
            <h5 >
            
           Product Name : <b style={{ color: "rgb(28, 200, 79)" }}>  {product.name}</b>
            </h5>
            <h5 >
            AMOUNT : <b style={{ color:"rgb(28, 200, 79)" }}> {product.price}</b>
            </h5>
            <h5 >
             
            Catagory :  <b style={{ color: "rgb(28, 200, 79)" }}>  {product.catagory}</b>
            </h5>
            <h5 >
            Description :  <b style={{ color: "rgb(28, 200, 79)" }}>  {product.description}</b>
            </h5>
           
           
           
          </div>
        )}
      </div>
      <br/>
      <Footer/>
    </Row>
   
 
  
  )
}

export default ViewProduct