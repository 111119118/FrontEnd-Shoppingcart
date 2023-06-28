import axios from "axios";
// import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Allproducts from "./Allproducts.css";
import Navbar from "./Navbar";
import UserNavbar from "./UserNavbar";



function Products() {
  const [product, setProduct] = useState([]);
  const fetchAll = () => {
    axios
      .get("http://localhost:9091/product/allProduct")
      .then((resp) => setProduct(resp.data));
  };
  useEffect(fetchAll, []);
  return (
    <Container>
    
      {/* <AdminLogout /> */}
      <Row>
      <UserNavbar/>
       

        <div class="main-container">
          <div class="container">
            <div class="row">
              {product.map((p) => (
                <div class="card col-md-3">
                  <img src={p.image} />

                  <h4>{p.name}</h4>

                  <p>
             
                    Rs.
                    {p.price}
                  </p>

                  <Link to={"/Payment"}>    <button class="btn btn-primary">Buy Now</button></Link><br></br>
                  <Link to={`/view${p.productId}`}> <button class="btn btn-primary">View</button></Link>
                <br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Products;
