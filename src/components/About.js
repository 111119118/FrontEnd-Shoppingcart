import React from 'react'
import Footer from './Footer/Footer'
import { Container, Row } from "react-bootstrap";
import MainNavbar from './MainNavbar';

function About() {
  return (
    <Row>
      <MainNavbar/>
    <div>


<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://thumbs.dreamstime.com/b/online-ecommerce-shopping-website-store-laptop-screen-240715588.jpg" alt="Los Angeles" class="d-block" style={{width: "100%"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/online-retail-shopping-laptop-computer-screen-online-retail-shopping-211511245.jpg" alt="Chicago" class="d-block" style={{width: "100%"}} />
    </div>
    <div class="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/online-shopping-ecommerce-shop-laptop-219300548.jpg" alt="New York" class="d-block" style={{width: "100%"}} />
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

<div class="container-fluid mt-3">
  <h3>Online Shopping Cart</h3>
  <p>IF YOU CAN'T STOP THINKING ABOUT IT...
BUY IT.</p>
</div>

    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6010818ddb03038252b93466_6002086f72b727041a01dcfd_h915mj-X0tQZ8Kz0xT37tuzrMQn9cR9_fYLiLFe8lcGIDh8LL50AVjgJiSbjETAYaBpJMvD46R0sZpM6F0S6xsu9q-m9KOtQRdPFDg4ZBCMmy_lGH5RxMfbXYUdq1fbP0zfONZq7.jpeg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Cart</h5>
          <p class="card-text">A shopping cart  that allows customers to purchase items from your shop or store a list of the items they wish to purchase in the future.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://thumbs.dreamstime.com/b/discount-ad-store-app-concept-woman-holding-smartphone-shopping-online-close-up-discount-ad-store-app-concept-woman-153682614.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Products</h5>
          <p class="card-text">We have different types of products you can choose the best at low time in online shopping.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://www.kotak.com/content/dam/Kotak/product_card_images/how-credit-cards-enhance-your-shopping-experience.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Payment</h5>
          <p class="card-text">Online payments are payments that are initiated over the internet for goods or services purchased either online or offline.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://kissenglishcenter.com/wp-content/uploads/2022/05/bo%CC%82%CC%81-cu%CC%A3c-khi-vie%CC%82%CC%81t-doa%CC%A3n-va%CC%86n-tie%CC%82%CC%81ng-anh-ve%CC%82%CC%80-shopping.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Sales</h5>
          <p class="card-text">Online shopping have discount and offer to get the best product for sale.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
  </Row>
  )
}

export default About