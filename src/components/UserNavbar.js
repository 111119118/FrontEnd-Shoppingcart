import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import cart from "../assets/images/cart.png";
 //import './Navbar.css';


function UserNavbar() {
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
  const myUser = JSON.parse(localStorage.getItem("myUser"));
  const navigate = useNavigate();
  const logoutButton = () => {
    if (myUser != null) {
      localStorage.removeItem("myUser");
      localStorage.clear();
      alert("You have successfully logged out.");
      navigate("/");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img  className="icon" src={cart} /> 
      <a class="navbar-brand" href="#"><i style={{ color:'orange'}}> Shopping Cart</i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/adminproducts">Products</a>
          </li> */}
           <li className="nav-item">
              <Link to={"/products"} className='nav-link'>
               <i> Products </i>
              </Link>
            </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
         
        </ul>
        <form class="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-2">
        <li class="nav-item" >
        <button className="buttonlearn" onClick={logoutButton}>
                 
                  LOGOUT
                </button>
          </li>
         
        </ul></form>
      </div>
    </div>
  </nav>
  );
}
export default UserNavbar;