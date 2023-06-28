import { React, useRef, useState } from "react";
import register from "../assets/images/register.gif";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Col, Container, Row } from "react-bootstrap";
const Register = () => {
  const [profile, setprofile] = useState({
    contactNumber: "",
    date: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    password: "",
    username: "",
    house: "",
    street: "",
    city: "",
    state: "",
    country: "",
  });

//   var useraddressList = [];
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setprofile((profile) => ({
      ...profile,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    let errors = {};
    if (!profile.firstName) {
      errors["firstNameErr"] = "Enter First Name";
    }
    if (!profile.lastName) {
      errors["lastNameErr"] = "Enter Last Name";
    }
    if (!profile.email) {
      errors["emailErr"] = "Enter Email Id";
    }
    if (!profile.contactNumber) {
      errors["contactNumberErr"] = "Enter Contact Number";
    }
    if (!profile.date) {
      errors["dateErr"] = "Enter Date OF Birth";
    }
    if (!profile.username) {
      errors["usernameErr"] = "Enter UserName";
    }
    if (!profile.password) {
      errors["passwordErr"] = "Enter Password";
    }
    if (!profile.gender) {
      errors["genderErr"] = "Enter Gender";
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const palyload = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        contactNumber: profile.contactNumber,
        date: profile.date,
        gender: profile.gender,
        username: profile.username,
        password: profile.password,
        house: profile.house,
        street: profile.street,
        city: profile.city,
        state: profile.state,
        country: profile.country,
      };

      axios
        .post("http://localhost:8007/profile/save", palyload)
        .then((resp) =>
          alert("profile is saved with id:" + resp.data.profileId)
        );
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div >
            <h3 style={{ color: "blue" }}>
              <b>Please Enter The Following Details</b>
            </h3>
            <div
              className="Login"
              class="row h-100 justify-content-center align-items-center"
            >
              <div className="col-10 col-md-6 col-lg-11 ">
                <div className="form-group">
                  <div class="row mb-3">
                    <label for="email" class="col-sm-3 col-form-label">
                      Email :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email "
                        name="email"
                        id="email"
                        onChange={(e) => {
                          setprofile({ ...profile, email: e.target.value });
                        }}
                        required
                      />{" "}
                      {formErrors.emailErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.emailErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="firstName" class="col-sm-3 col-form-label">
                      FirstName :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" First Name "
                        name="firstName"
                        id="firstName"
                        onChange={(e) => {
                          setprofile({ ...profile, firstName: e.target.value });
                        }}
                        required
                      />
                      {formErrors.firstNameErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.firstNameErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="lastName" class="col-sm-3 col-form-label">
                      LastName :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" last Name "
                        name="lastName"
                        id="lastName"
                        onChange={(e) => {
                          setprofile({ ...profile, lastName: e.target.value });
                        }}
                        required
                      />
                      {formErrors.lastNameErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.lastNameErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="contactNumber" class="col-sm-3 col-form-label">
                      ContactNumber
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" ContactNumber "
                        name="contactNumber"
                        maxlength="10"
                        id="contactNumber"
                        onChange={(e) => {
                          setprofile({
                            ...profile,
                            contactNumber: e.target.value,
                          });
                        }}
                        required
                      />
                      {formErrors.contactNumberErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.contactNumberErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="date" class="col-sm-3 col-form-label">
                      Date of Birth :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="date"
                        class="form-control"
                        placeholder=" date "
                        name="date"
                        id="date"
                        onChange={(e) => {
                          setprofile({ ...profile, date: e.target.value });
                        }}
                        required
                      />
                      {formErrors.dateErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.dateErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-3 pt-0">
                      Gender :
                    </legend>
                    <div class="col-sm-9">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender"
                          value="Male"
                          onChange={(e) => {
                            setprofile({ ...profile, gender: e.target.value });
                          }}
                        />
                        <label class="form-check-label">Male</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender"
                          value="Female"
                          onChange={(e) => {
                            setprofile({ ...profile, gender: e.target.value });
                          }}
                        />
                        <label class="form-check-label">Female</label>

                        {formErrors.genderErr && (
                          <div style={{ color: "red", paddingBottom: 10 }}>
                            {formErrors.genderErr}
                          </div>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  <div class="row mb-3">
                    <label for="username" class="col-sm-3 col-form-label">
                      UserName :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" username "
                        name="username"
                        id="username"
                        onChange={(e) => {
                          setprofile({ ...profile, username: e.target.value });
                        }}
                        required
                      />
                      {formErrors.usernameErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.usernameErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="password" class="col-sm-3 col-form-label">
                      Password :
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" password "
                        name="password"
                        id="password"
                        onChange={(e) => {
                          setprofile({ ...profile, password: e.target.value });
                        }}
                        required
                      />
                      {formErrors.passwordErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.passwordErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-3 pt-0">
                      Address :
                    </legend>
                    <div class="col-sm-9">
                      <input
                        class="form-control mb-3"
                        type="number"
                        name="house"
                        placeholder="House Number"
                        id="house"
                        onChange={(e) => {
                          setprofile({ ...profile, house: e.target.value });
                        }}
                      />

                      <input
                        class="form-control mb-3"
                        type="text"
                        name="street"
                        placeholder="Street Name"
                        id="street"
                        onChange={(e) => {
                          setprofile({ ...profile, street: e.target.value });
                        }}
                      />
                      <input
                        class="form-control mb-3"
                        type="text"
                        name="city"
                        placeholder="City"
                        id="city"
                        onChange={(e) => {
                          setprofile({ ...profile, city: e.target.value });
                        }}
                      />

                      <input
                        class="form-control mb-3"
                        type="text"
                        name="state"
                        placeholder="State"
                        id="state"
                        onChange={(e) => {
                          setprofile({ ...profile, state: e.target.value });
                        }}
                      />

                      <input
                        required
                        class="form-control"
                        type="text"
                        name="country"
                        placeholder="country"
                        id="country"
                        maxlength="6"
                        onChange={(e) => {
                          setprofile({ ...profile, country: e.target.value });
                        }}
                      />
                    </div>
                  </fieldset>

                  <div>
                    <button className="save" onClick={handleSubmit}>
                      Save
                    </button>
                  </div>

                  <p>
                    <i className="fount">If you are not login, </i>
                    <Link to={"/login"}>
                      <i>LOGIN</i>, <Link to="/">HOME </Link>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={3} sm={7} className='back-img-login'>
<img className='img-back' src={register} alt='register' />
</Col>
      </Row>
    </Container>
  );
};

export default Register;
