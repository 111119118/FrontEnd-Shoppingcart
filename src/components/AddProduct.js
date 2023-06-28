// import React from 'react'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button, Col, Container,  Row } from "react-bootstrap";
import d from "../assets/images/d.gif";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

function AddProduct() {

    const [product, setProduct] = useState({
     
        productId: "",
        name: "",
        price: "",
        catagory:"",
        description:"",
        image:""
      });
    
      const navigate = useNavigate();
      const [formErrors, setFormErrors] = useState({});
      const handleChange = (event) => {
        setProduct((product) => ({
            ...product,
              [event.target.name]: event.target.value,
             
            }));
          };
          const handleSubmit = () => {
           
            let errors = {};
            if (!product.productId) {
                errors["productIdErr"] = "productId is required";
              }
            if (!product.name) {
                errors["nameErr"] = "product Name is required";
              }
              if (!product.price) {
                  errors["priceErr"] = "Price is required";
                }
              if (!product.catagory) {
                errors["catagoryErr"] = " Catagory is required";
              }
              if (!product.description){
                  errors["descriptionErr"]="description is required";
              }
              if (!product.image){
                errors["imageErr"]="image is required";
            }
              setFormErrors(errors);
              const noErrors = Object.keys(errors).length === 0;
              if (noErrors) {
                const payload = {

                    productId:product.productId,
                    name: product.name,
                    price:product.price,
                    catagory: product.catagory,
                    description:product.description,
                    image:product.image
                  };
                  axios
                  .post(
                    "http://localhost:9091/product/addProduct",
                    payload
                  )
                  .then((resp) =>
                    alert("Product is saved with id:" + resp.data.productId)
                  );
                  navigate(-1);
                }
            };

  return (
 
      
    <Row>
    <Navbar/>
        <Col className="col">

        <h1><i style={{ color: "blue" }}>ADD PRODUCTS</i></h1>
    
    <div  className="trainerbgpg" style={{marginTop:"6%"}}>
    <div  style={{fontSize:"20px"}}className="mrginlistalltrainer"> 
    <div className="col-10 col-md-8 col-lg-9">
                <div className="form-group">
    {/* <a class="previous">&laquo;</a>  */}
   
    {/* <Link to="/getAllGuest"  style={{color:"chocolate"}} className="previous round"><u>Back</u></Link> </div> */}
   
    <div>
      <label>PRODUCT ID</label>
      <input
      id="lname"
       className="form-control"
        type="text"
        name="productId"
        value={product.productId}
        onChange={handleChange}
      />
       {formErrors.productIdErr && (
        <div style={{ color: "red", paddingBottom: 10 }}>
          {formErrors.productIdErr}
        </div>
      )}
    </div>





   
   <div>
      <label>PRODUCT NAME</label>
      <input
      id="lname"
       className="form-control"
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
      />
       {formErrors.nameErr && (
        <div style={{ color: "red", paddingBottom: 10 }}>
          {formErrors.nameErr}
        </div>
      )}
    </div>




   
    <div>
        <label>PRICE</label>
        <input
        id="lname"
         className="form-control"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
         {formErrors.priceErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.priceErr}
          </div>
        )}
      </div>
      <div>
        <label>Catagory</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="catagory"
          value={product.catagory}
          onChange={handleChange}
        />
         {formErrors.catagoryErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.catagoryErr}
          </div>
        )}
      </div>
      <div>
        <label>Description</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
         {formErrors.descriptionErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.descriptionErr}
          </div>
        )}
      </div>
      <div>
        <label>IMAGE</label>
        <input
        id="lname"
         className="form-control"
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
         {formErrors.imageErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {formErrors.imageErr}
          </div>
        )}
      </div>
      <br></br>
      <div id="outer" >
        <div  class="inner1"><button className = "btn btn-primary mb-2"  onClick={handleSubmit}>Save</button></div>
        {/* <div class="inner2"><Link to="/getAllGuest" className="btn btn-danger"> Cancel </Link></div> */}
      </div>
    </div>

</div>
</div>
</div>
</Col>
<Col>

<br></br><br></br><br></br><br></br><br></br>
<img
                className="d-block w-100"
                src={d}
                alt="addproduct"
              />
             <h4><b><i>Add products</i></b></h4> 
</Col>
<Footer/>
</Row>

  )
};

export default AddProduct