import axios from "axios";
// import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
// import Allproducts from "./Allproducts.css";
// import Navbar from "./Navbar";

function AdminProducts() {
  const [product, setProduct] = useState([]);
  const fetchAll = () => {
    axios
      .get("http://localhost:9091/product/allProduct")
      .then((resp) => setProduct(resp.data));
  };
  useEffect(fetchAll, []);
  return (
   
         
    
      <Row>
         <Navbar/>
      
        {/* <div className="container-fluid ">
          <h1>
            {" "}
            <i>All Products</i>
          </h1>
          <hr></hr>
          <table className="table table-striped ">
            <thead className="color">
              <tr>
                <th>SNO</th>
                <th>ID </th>
                <th>Name</th>
                <th>Price </th>
                <th>Catagory </th>
                <th>description</th>

                <th>view</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {product.map((t, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{t.productId}</td>
                  <td>{t.name}</td>
                  <td>{t.price}</td>
                  <td>{t.catagory}</td>
                 <td>{t.description}</td>
                
                  <td>
                    <Link to={`/product/view${t.productId}`}>View</Link>
                  </td>
                  <td>
                    <Link to={`/product/delete/${t.productId}`}>Delete</Link>
                  </td>

                  <td>
                    <Link to={`/product/update/${t.productId}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <div class="main-container">
          <div class="container">
            <div class="row">
              {product.map((p) => (
                <div class="card col-md-3">
                  <img src={p.image} />

                  <h4>{p.name}</h4>

                  <p>
                    {" "}
                    Rs.
                    {p.price}
                  </p>

                  {/* <button class="btn btn-primary"> Add to cart</button><br></br> */}
                <Link to={`/product/view${p.productId}`}> <button class="btn btn-primary">View</button></Link>
                <br/>
                <Link to={`/product/delete/${p.productId}`}> <button class="btn btn-primary">Delete</button></Link><br/>
                <Link to={`/update/${p.productId}`}> <button class="btn btn-primary">Edit</button></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </Row>
   
  );
}

export default AdminProducts;
