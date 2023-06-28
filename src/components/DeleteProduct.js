// import React from 'react'
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import { useNavigate } from "react-router";

function DeleteProduct() {
    const[product, setProduct] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams();
    const fetchProductById = () => {
        axios.get("http://localhost:9091/product/get/"+ id).then(resp => setProduct(resp.data))
        
    }
    useEffect(fetchProductById, []);
    const deleteProduct  = () => {
        axios.delete("http://localhost:9091/product/delete/" + id).then(resp => alert(resp.data));
        
        alert("Product Deleted Successfully")
        navigate("/adminproducts");
    }
  return (
    
          
            <Row>
                
<Navbar/>
                
            <h2 ><b><i style={{ color:' blue'}}> DELETE Product</i></b></h2><hr></hr>
                <Col>
            
       
        
            {
                product !== null &&
                <div>
                     <img className="image" src={product.image} />
                    <p><b > PRODUCT ID : <i style={{ color:' red'}}>{product.productId}</i></b> </p>
                    <p><b >PRODUCT NAME:<i style={{ color:' red'}}> {product.name}</i></b></p>
                    <p><b >PRICE:<i style={{ color:' red'}}>{product.price}</i></b></p>
                    {/* <p><b >CATAGORY :<i style={{ color:' green'}}>{product.catagory}</i></b></p>
                    <p><b >DESCRIPTION:<i style={{ color:' green'}}> {product.description}</i></b></p> */}
                    <button className='delete' onClick={deleteProduct}><b> Delete</b></button>                
                </div>
            }<br/>
        
           
       
        </Col>
       <Footer/>
        </Row>
       
  )
}

export default DeleteProduct