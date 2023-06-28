
import './App.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './components/Register';
import AllProducts from './components/AllProducts';
import ViewProduct from './components/ViewProduct';
import DeleteProduct from './components/DeleteProduct';

import Home from './components/Home';
// import Footer from './components/Footer/Footer';
import AddProduct from './components/AddProduct';
import { Navbar } from 'react-bootstrap';
import AdminProducts from './components/AdminProducts';
import MainNavbar from './components/MainNavbar';
import AdminLogin from './components/AdminLogin';
import Login from './components/Login';
import Demo from './components/Demo';
import Logout from './components/Logout';
import About from './components/About';
import UpdateProduct from './components/UpdateProduct';
import View from './components/View';
import PaymentOpen from './components/Payment/PaymentOpen';
import Products from './components/Products';
import UserNavbar from './components/UserNavbar';






function App() {
  return (
    <div className="App">

<Router>
  <Routes>
    <Route  path="/login" element={<Login/>} />
    <Route  path="/register" element={<Register/>}/>
    <Route path="/allproducts" element={<AllProducts/>}/>
    <Route path="/product/view:id" element={<ViewProduct/>}/>
    <Route path="/product/delete/:id" element={<DeleteProduct/>}/>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/addproduct" element={<AddProduct/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/adminproducts" element={<AdminProducts/>}/>
    <Route path="/Mainnavbar" element={<MainNavbar/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/demo"          element={<Demo/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/update/:id" element={<UpdateProduct/>}/>
    <Route path="/view:id" element={<View/>}/>
    <Route path="/Payment" element={<PaymentOpen />} />
    <Route path="/products" element={<Products/>}/>
    <Route path="/userNav" element={<UserNavbar/>}/>
   
  </Routes>
</Router>

{/* <Footer></Footer> */}
    </div>
     
  );
 
}

export default App;
