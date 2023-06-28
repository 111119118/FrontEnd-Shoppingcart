// import React, { Fragment, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// // import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
// import axios from "axios";
// function Demo() {
//     useEffect(() => {
//         document.title = "Registration";
//       }, []);
    
//       const [Profile, setProfile] = useState({});
//       const [Address, setAddress] = useState({});
//       var userAddressList = [];
//       const handleForm = (e) => {
//         // postDataToServer();
//         console.log(Profile);
//         // postDataToServer(Profile);
//         e.preventDefault();
//       };


//     //   const postDataToServer = (data) => {
//     //     if (data.userRole === "Merchant") {
//     //         axios.post(`${api}/profile/addMerchant`, data).then(
//     //           (response) => {
//     //             successNotify(data.userRole);
//     //           },
//     //           (error) => {
//     //             console.log(error);
//     //             errorNotify();
//     //           }
//     //         );
//     //       } else if (data.userRole === "Delivery Agent") {
//     //         axios.post(`${api}/profile/addDeliveryAgent`, data).then(
//     //           (response) => {
//     //             successNotify(data.userRole);
//     //           },
//     //           (error) => {
//     //             console.log(error);
//     //             errorNotify();
//     //           }
//     //         );
//     //         }

//     const successNotify = (role) => {
//         toast.success(`New ${role} Registration Successfull`, {
//           position: "bottom-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//         });
//       };
//       const errorNotify = () => {
//         toast.error(`Something went Wrong`, {
//           position: "bottom-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//         });
//       };
   
  























//   return (
//     <div className="col-12 col-md-5 col-lg-7">
//   <form onSubmit={handleForm} >

//   <div class="row mb-3">
//               <label for="email" class="col-sm-3 col-form-label">
//                 email
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="email"
//                   class="form-control"
//                   placeholder="Enter email "
//                   name="email"
//                   id="email"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, useremail: e.target.value });
//                   }}
//                   required
//                 />

//               </div>
//             </div>
            







// <div class="row mb-3">
//               <label for="firstName" class="col-sm-3 col-form-label">
//                 firstName
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter firstName "
//                   name="firstName"
//                   id="firstName"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userFullfirstName: e.target.value });
//                   }}
//                   required
//                 />
//               </div>
//             </div>



//             <div class="row mb-3">
//               <label for="lastName" class="col-sm-3 col-form-label">
//                 lastName
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter lastName "
//                   name="lastName"
//                   id="lastName"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userFulllastName: e.target.value });
//                   }}
//                   required
//                 />
//               </div>
//             </div>




//             <div class="row mb-3">
//               <label for="username" class="col-sm-3 col-form-label">
//                 username
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter username "
//                   name="username"
//                   id="username"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userFullusername: e.target.value });
//                   }}
//                   required
//                 />
//               </div>
//             </div>








//             <div class="row mb-3">
//               <label for="password" class="col-sm-3 col-form-label">
//                 password
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="password"
//                   class="form-control"
//                   placeholder="Enter password "
//                   name="password"
//                   id="password"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userpassword: e.target.value });
//                   }}
//                   required
//                 />
//               </div>
//             </div>


//             <fieldset class="row mb-3">
//               <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
//               <div class="col-sm-9">
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="radio"
//                     name="gender"
//                     id="gender"
//                     value="Male"
//                     onChange={(e) => {
//                       setProfile({ ...Profile, gender: e.target.value });
//                     }}
//                   />
//                   <label class="form-check-label">Male</label>
//                 </div>
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="radio"
//                     name="gender"
//                     id="gender"
//                     value="Female"
//                     onChange={(e) => {
//                       setProfile({ ...Profile, gender: e.target.value });
//                     }}
//                   />
//                   <label class="form-check-label">Female</label>
//                 </div>
//               </div>
//             </fieldset>





//             <div class="row mb-3">
//               <label for="date" class="col-sm-3 col-form-label">
//                 Date of Birth
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="date"
//                   class="form-control"
//                   placeholder="DD-MM-YYYY"
//                   name="date"
//                   id="date"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, date: e.target.value });
//                   }}
//                 />
//               </div>
//             </div>




//             <div class="row mb-3">
//               <label for="contactNumber" class="col-sm-3 col-form-label">
//                 contactNumber 
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Mobile No. "
//                   name="contactNumber"
//                   id="contactNumber"
//                   maxlength="10"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userMobileNo: e.target.value });
//                   }}
//                 />
//               </div>
//             </div>

//   {/* //Role */}


//   <div class="row mb-3">
//               <label for="role" class="col-sm-3 col-form-label">
//                 role 
//               </label>
//               <div class="col-sm-9">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Mobile No. "
//                   name="role"
//                   id="role"
//                   maxlength="10"
//                   onChange={(e) => {
//                     setProfile({ ...Profile, userMobileNo: e.target.value });
//                   }}
//                 />
//               </div>
//             </div>



// {/* Address */}

// <fieldset class="row mb-3">
//               <legend class="col-form-label col-sm-3 pt-0">Address</legend>
//               <div class="col-sm-9">
//                 <input
//                   class="form-control mb-3"
//                   type="number"
//                   name="house"
//                   placeholder="House Number"
//                   id="house"
//                   onChange={(e) => {
//                     setAddress({ ...Address, house: e.target.value });
//                   }}
//                 />

//                 <input
//                   class="form-control mb-3"
//                   type="text"
//                   name="street"
//                   placeholder="Street Name"
//                   id="street"
//                   onChange={(e) => {
//                     setAddress({ ...Address, street: e.target.value });
//                   }}
//                 />

//                 {/* <input
//                   class="form-control mb-3"
//                   type="text"
//                   name="colonyname"
//                   placeholder="Colony Name"
//                   id="colonyname"
//                   onChange={(e) => {
//                     setAddress({ ...Address, colonyName: e.target.value });
//                   }}
//                 /> */}

//                 <input
//                   class="form-control mb-3"
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   id="city"
//                   onChange={(e) => {
//                     setAddress({ ...Address, city: e.target.value });
//                   }}
//                 />

//                 <input
//                   class="form-control mb-3"
//                   type="text"
//                   name="state"
//                   placeholder="State"
//                   id="state"
//                   onChange={(e) => {
//                     setAddress({ ...Address, state: e.target.value });
//                   }}
//                 />

//                 <input
//                   required
//                   class="form-control"
//                   type="text"
//                   name="country"
//                   placeholder="country"
//                   id="country"
//                   maxlength="6"
//                   onChange={(e) => {
//                     setAddress({ ...Address, country: e.target.value });
//                     console.log(Address);
//                     userAddressList.push(Address);
//                     setProfile({ ...Profile, userAddresses: userAddressList });
//                   }}
//                 />
//               </div>
//             </fieldset>

//             <div className="text-center ">
//               <button type="submit" class="btn btn-outline-success btn-block m-2 w-25 rounded">
//                   Register
//               </button>
//               <button type="reset" class="btn btn-outline-warning btn-block m-2 w-25 rounded">
//                 Clear
//               </button>
//             </div>

















//   </form>



// </div>

 
//   );
//                 }

// export default Demo;