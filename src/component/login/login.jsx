import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

import "./login.scss";
import UserService from "../../services/userService";
import Snackbar from "../snackbar/snackbar";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,

      formErrors: {
        errorEmail: "",
        errorPassword: "",
      },
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
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      [e.target.name]: e.target.value,
    });
    let inputs = this.state.formErrors;

    switch (e.target.name) {
      case "email":
        inputs.errorEmail =
          emailValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid email";
        break;
      case "password":
        inputs.errorPassword =
          passwordValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid password";
        break;

      default:
        break;
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password,
      cartId: "",
    };
    if ( 
      this.state.formErrors.errorEmail === "" ||
      this.state.formErrors.errorPassword === ""
    ) {
      console.log("Input Fields are not properly filled");
      this.setState({
        snackbarStatus: true,
        text: "Input Fields are not properly filled",
      });
    } else {
      UserService.login(userData).then((data) => {
        console.log(data);
        this.setState({
          snackbarStatus: true,
          text: "Login successfully",
        });
      }).catch((error) => {
        console.log("Invalid Entry",error);
        this.setState({
          snackbarStatus: true,
          text: "Unauthorized user ",
        });
      });
    }
  };

  render() {
    return (
      <div className="outerCard">
        <div className="fundooAlign">
          <div className="Fcolor">F</div>
          <div className="Fcolor">u</div>
          <div className="Fcolor">n</div>
          <div className="Fcolor">d</div>
          <div className="Fcolor">o</div>
          <div className="Fcolor">o</div>
        </div>
        <div className="font1">
          <h5>Sign In</h5>
        </div>
        <div className="font2">
          <h7>Continue to Fundoo</h7>
        </div>
        <div className="textFiled">
          <div className="inputEmail">
            <Input 
              placeholder="UserName"
              name="email" 
              onChange={this.onValueChange} 
            />
            <p className="errorMessage">{this.state.formErrors.errorEmail}</p>
          </div>
          <div className="inputPass">
            <Input.Password
              placeholder="Enter password"
              label="Password"
              type="password"
              name="password"
              onChange={this.onValueChange}
            />
            <span className="errorMessage">
              {this.state.formErrors.errorPassword}
            </span>
          </div>
        </div>
        <br />
        <Button className="loginbtn" type="submit" onClick={this.onSubmit}>
          Login
        </Button>
        <Snackbar
          text={this.state.text}
          openStatus={this.state.snackbarStatus}
          closeStatus={this.handleClose}
        ></Snackbar>
        <div className="links">
          <div>
            <Link to="/signup">
              <h6>Create account</h6>
            </Link>
          </div>
          <div className="forgetText">
            <Link to="/forgetPass">
              <h6>Forget password ?</h6>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
