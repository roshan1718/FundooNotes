import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

import "./forgetPassword.scss";
import UserService from "../../services/userService";
import Snackbar from "../snackbar/snackbar";

export default class forgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,

      formErrors: {
        errorEmail: "",
      },
      flag: 0,
      snackbarStatus: false,
      text: "",
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      snackbarStatus: false,
      text: "",
    });
  };

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
    let userData = {
      email: this.state.email,
    };
    if (this.state.formErrors.errorEmail !== "") {
      console.log("Input Fields are not properly filled");
      this.setState({
        snackbarStatus: true,
        text: "Input Fields are not properly filled",
      });
    } else {
      UserService.forgetPass(userData).then((data) => {
        console.log(data);
        this.setState({
          snackbarStatus: true,
          text: "Set password link sent to you registered email, please check.",
        });
      }).catch((error) => {
        console.log("Invalid Entry",error);
        this.setState({
          snackbarStatus: true,
          text: "Invalid Entry",
        });
      });
    }
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
        <Snackbar
          text={this.state.text}
          openStatus={this.state.snackbarStatus}
          closeStatus={this.handleClose}
        ></Snackbar>
      </div>
      
    );
  }
}
