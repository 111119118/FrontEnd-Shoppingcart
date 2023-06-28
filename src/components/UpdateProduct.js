import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";

function UpdateProduct() {
    const [product, setProduct] = useState({
        productId: "",
        name: "",
        price: "",
        description: "",
        catagory: "",
        image: "",
        
      });
    
      const { id } = useParams();
    
      const navigate = useNavigate();
      const fetchProductById = () => {
        axios
          .get("http://localhost:9091/product/get/" + id)
          .then((resp) => setProduct(resp.data));
      };
      useEffect(fetchProductById, []);
      const handleChange = (event) => {
        setProduct((product) => ({
          ...product,
          [event.target.name]: event.target.value,
        }));
      };
      const [formErrors, setFormErrors] = useState({});
      const handleSubmit = () => {
        let errors = {};
        if (!product.name) {
          errors["nameErr"] = "Enter Product Name";
        }
        if (!product.price) {
          errors["priceErr"] = "Enter Price";
        }
        if (!product.catagory) {
          errors["catagoryErr"] = "Enter Catagory";
        }
        if (!product.description) {
          errors["descriptionErr"] = "Enter description";
        }
        if (!product.image) {
          errors["imageErr"] = "image is required";
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          const palyload = {
            productId: id,
            name: product.name,
            price: product.price,
            catagory: product.catagory,
            description: product.description,
            image: product.image,
          };
          axios
            .put("http://localhost:9091/product/update/", palyload)
    
            .then((resp) => alert("User updated successfully:"));
          navigate(-1);
        }
      };
    
  return (
  
         
            <Row>
            <Navbar/>
   <div>
     
     <div class="row h-100 justify-content-center align-items-center">
       <div className="col-10 col-md-8 col-lg-4  ">
         
       <h1><i style={{ color: "blue" }}>Update product</i></h1>
       <br/>
    

           <label>
             <b>
               <i>ProductName</i>
             </b>
           </label>
           <input
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
         
         <div>
           <label>
             <b>
               <i>Price</i>
             </b>
           </label>
           <input
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
           <label>
             <b>
               <i>Catagory</i>
             </b>
           </label>
           <input
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
           <label>
             <b>
               <i>Description</i>
             </b>
           </label>
           <input
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
           <label>
             <b>
               <i>IMAGE</i>
             </b>
           </label>
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

         <br/>
        
           <button className="edit" onClick={handleSubmit}>
             UPDATE
           </button>
         
       </div>
     </div>
   </div>

   <br/>
 </Row>

  )
}

export default UpdateProduct