import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

import "./forgetPassword.scss";
import UserService from "../../services/userService";

export default class forgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,

      formErrors: {
        errorEmail: "",
      },
    };
  }

  onValueChange = (e) => {
    let emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    this.setState({
      [e.target.name]: e.target.value,
    });
    let inputs = this.state.formErrors;
    inputs.errorEmail =
      emailValidation.test(e.target.value) === true ? "" : "Enter valid email";
  };

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    console.log(email);
    UserService.forgetPass(email)
      .then((data) => {
        console.log("", email);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div className="fpOuterdiv">
        <div className="fpFundooAlign">
          <div className="Fcolor">F</div>
          <div className="Fcolor">u</div>
          <div className="Fcolor">n</div>
          <div className="Fcolor">d</div>
          <div className="Fcolor">o</div>
          <div className="Fcolor">o</div>
        </div>
        <div className="font">
          <h5>Find your Password</h5>
        </div>
        <p>Enter your recovery email</p>
        <div className="fpinput">
          <Input
            className="fpinput"
            id="outlined-basic"
            placeholder="Enter Email id"
            name="email"
            type="email"
            required
            onChange={this.onValueChange}
          />
          <span className="errorMessage">
            {this.state.formErrors.errorEmail}
          </span>
        </div>
        <div className="button">
          <div>
            <Link to={"/signUp"}>
              <Button className="backbtn"> Back </Button>
            </Link>
          </div>
          <div>
            <Button className="nextbtn" type="submit" onClick={this.onSubmit}>
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
