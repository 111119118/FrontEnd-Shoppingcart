import React, { useState } from "react";
import axios from "axios";
import login from "../assets/images/login.gif";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
// import img1 from "./img/img-login.svg";
// import { baseUrl } from "../URL/AppConstants";

//function Login()
// {
  // const [loginForm, setLoginForm] = useState({
  //   username: "",
  //   password: "",
  // });
  // const [formErrors, setFormErrors] = useState({});
  // const navigate = useNavigate();
  // const handleChange = (event) => {
  //   setLoginForm((loginForm) => ({
  //     ...loginForm,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  // const handleSubmit = (event) => {
  //   let errors = {};
  //   if (!loginForm.username) {
  //     errors["usernameErr"] = "username is required";
  //   }
  //   if (!loginForm.password) {
  //     errors["passwordErr"] = "password is required";
  //   }
  //   setFormErrors(errors);
  //   const noErrors = Object.keys(errors).length === 0;
  //   if (noErrors) {
  //     let payload = {
  //       username: loginForm.username,
  //       password: loginForm.password,
  //     };
  //     axios
  //       .post("http://localhost:8007/profile/profile-login", payload)
               
  //       .then((resp) => {
  //         console.log(resp.data);
  //         alert("Welcome " + resp.data.username);
  //         let user = {
  //           profileId: resp.data.profileId,
  //           username: resp.data.fName,
  //         };
  //         localStorage.setItem("myUser", JSON.stringify(user));
  //         navigate("/allproducts");
  //       })
  //       .catch((error) => {
  //         console.log(error.response);
  //         alert(error.response.data);
  //       });
  //   }
  //   event.preventDefault();
  // };
  

  function Login() {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        //validation login form
        let errors = {};
        if (!loginForm.username) {
            errors["usernameErr"] = "Username is required"
        }
        if (!loginForm.password) {
            errors["passwordErr"] = "Password is required"
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        // if no errors call the login api
        if (noErrors) {
           
            let payload = {
                username: loginForm.username,
                password: loginForm.password
            }

           // http://localhost:9002/dealer/dealer-login?password=Biju%401234&username=Bijubabu
            axios
            .post(
                "http://localhost:8007/profile/profile-login?password=" +
                loginForm.password +
                "&username=" +
                loginForm.username, payload).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.firstName);
//...............................................................................
                //local storage to show our details
                let user={

                    profileId:resp.data.profileId,
                    firstName: resp.data.firstName
                }
                localStorage.setItem("myUser",JSON.stringify(user));
//................................................................................

                navigate("/products");
            }).catch(error => {
                console.log(error.response);
                alert("login failed");
            })
        }
        event.preventDefault();
    }























  return (
    <Container>
      <Row>
        {/* <MainNavbar/> */}
        {/* <Navbar/> */}
        <Col>
          <div
            className="Login"
            class="row h-100 justify-content-center align-items-center"
          >
           
            <div className="col-10 col-md-3 col-lg-9">
            <h1 style={{ color: "blue" }}><b><i>USER LOGIN</i></b> </h1><br></br>
              <div className="form-group">
                <label htmlFor="username"><b><i>username</i></b></label>
                <input
                 placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={loginForm.username}
                  onChange={handleChange}
                />
                {formErrors.usernameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.usernameErr}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password"><b><i>password</i></b></label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={loginForm.password}
                  onChange={handleChange}
                />
                {formErrors.passwordErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.passwordErr}
                  </div>
                )}
                <br></br>
              </div>

              <button onClick={handleSubmit} className="btn btn-primary">
                Login
              </button>
            </div>

            <p>
              <i className="fount">If you are not a registered user, </i>
              <Link to={"/register"}>
                <i>Sign up</i>
              </Link>
            </p>
          </div>
        </Col>
        <Col lg={7} md={6} sm={12} className="back-img-login">
          <img className="img-back" src={login} alt="image" />
        </Col> 


        {/* <Link to={"/home"}> Home page </Link> */}
        {/* <Link to={"/addproduct"}>add product</Link> */}
      </Row>
    </Container>
  );
}
export default Login;