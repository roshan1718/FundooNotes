import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Form } from "antd";

import "../signUp/signUp.scss";
import UserService from "../../services/userService";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      formErrors: {
        errorFirstName: "",
        errorLastName: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: "",
      },
    };
  }
  onValueChange = (e) => {
    let nameValidation = /^[A-Z][a-zA-Z]*$/;
    let emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      [e.target.name]: e.target.value,
    });

    let inputs = this.state.formErrors;
    switch (e.target.name) {
      case "firstName":
        inputs.errorFirstName =
          nameValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid first name";
        break;
      case "lastName":
        inputs.errorLastName =
          nameValidation.test(e.target.value) === true
            ? ""
            : "Enter Valid last name";
        break;
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
      case "confirmPassword":
        inputs.errorConfirmPassword =
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      service: "advance",
    };
    UserService.register(userData).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="outerCard">
        <div className="fundooTextAlign">
          <div className="Fcolor">F</div>
          <div className="Fcolor">u</div>
          <div className="Fcolor">n</div>
          <div className="Fcolor">d</div>
          <div className="Fcolor">o</div>
          <div className="Fcolor">o</div>
        </div>
        <div className="font">
          <h5>Create your Fundoo Account</h5>
        </div>
        <Form>
          <div className="Passwordfield">
            <div>
              <Input
                className="textSize"
                id="outlined-basic"
                placeholder="FirstName"
                label="firstName"
                name="firstName"
                type="firstName"
                required
                onChange={this.onValueChange}
              />
            </div>
            <div>
              <Input
                className="textSize"
                placeholder="LastName"
                id="outlined-basic"
                name="lastName"
                type="LastName"
                required
                onChange={this.onValueChange}
              />
            </div>
          </div>
          <div className="Passwordfield">
            <Input
              className="emailFiled"
              placeholder="Email"
              id="outlined-basic"
              label="E-mail"
              name="email"
              size="small"
              required
              onChange={this.onValueChange}
            />
          </div>

          <div className="flex">
            <span className="errorMessage">
              {this.state.formErrors.errorEmail}
            </span>
          </div>

          <div className="Passwordfield">
            <div>
              <Input
                className="textSize"
                id="outlined-basic"
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={this.onValueChange}
              />
            </div>
            <div>
              <Input
                className="textSize"
                placeholder="Confirm Password"
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="confirmPassword"
                type="password"
                required
                onChange={this.onValueChange}
              />
            </div>
          </div>
          <div className="flex">
            <span className="errorMessage">
              {this.state.formErrors.errorPassword}
            </span>
          </div>

          <div className="buttons">
            <Link to="/" className="links">
              <h6>Sign in instead</h6>
            </Link>
            <Button className="loginbtn" type="submit" onClick={this.onSubmit}>
              Create account
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
