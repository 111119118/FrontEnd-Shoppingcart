import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cart from "../assets/images/cart.png";
// import './Navbar.css';


function MainNavbar() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
 

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);


  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav mr-auto">
        {/* <Link to={"/"} className="navbar-brand">
        <b><i>SHOPPING CART</i> </b>
        </Link> */}
       
          <li className="nav-item">
          <img  className="icon" src={cart} /> 
      <a class="navbar-brand" href="#"><i style={{ color:'orange'}}> Shopping Cart</i></a>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
             <i>Home</i> 
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/allproducts"} className='nav-link'>
            <i>Products</i> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className='nav-link'>
              About Us
            </Link>
          </li>
        </div>

        <div className="ms-auto pe-md-5 navbar-nav">
        
          <li className='nav-item'>
            {/* <Link to='/dropdown' className='nav-link'> */}
            <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login">User Login</Dropdown.Item>
        {/* <Dropdown.Item href="/washerlog">Washer Login</Dropdown.Item> */}
        <Dropdown.Item href="/adminLogin">Admin Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            
          </li>
         
         
        </div>



      </nav>
    </>
  );
}
export default MainNavbar;