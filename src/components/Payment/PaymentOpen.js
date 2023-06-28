import React, { Component } from "react";
import PaymentService from "./PaymentService";
import { Col, Row } from "react-bootstrap";

// import login from "../assets/images/login.gif";
// import { toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

export default class PaymentOpen extends Component {
  state = {
    amount: "",
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let orderDetail = { amount: this.state.amount };

    PaymentService.createOrder(orderDetail).then((res) => {
      console.log("PAYMENT ORDER RESPONSE", res);
      var options = {
        key: "rzp_test_oDLvrWu5qpg5oT", 
        amount: res.data.amount,
        currency: "INR",
        name: "Shooping cart",
       
        // order_id: res.data.id,
        handler: function (response) {
          console.log(response);
          alert("Payment Successfully Completed !!!");
              
          window.location.href = "/";
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "green",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    });
  };

  render() {
    return (
      <div >
        <Row>
          <h1><i>Payment</i></h1>
          <Col className="payment">
        <form
          // style={{
          //   backgroundColor: "red",
          //   width: "100%",
          //   height: "340px",
          //   // marginLeft: "150px",
          //   // marginTop: "15px",
          // }}
        >
        
         
          <div className="form-outline mb-8 col-lg-8">
            <label className="form-label" htmlFor="form2Example1">
              <h1>Enter Amount</h1>
            </label>
            <input
              type="number"
              id="amount"
              className="form-control"
              placeholder="In Rupees"
              name="amount"
              // value={this.state.amount}
              onChange={this.onHandleChange}
            />
            <br/>
            <button
            type="button"
            className="btn btn-success btn-block "
            onClick={this.onSubmit}
          >
            Procced To Pay
          </button>
          </div>
          
        </form>
        </Col>
       


        <Col  >
          <img className="img-back" src={"https://cdn.kibrispdr.org/data/1792/payment-gif-32.gif"} alt="image" />
        </Col> 
       
        
        </Row>
     
      </div>
    );
  }
}
