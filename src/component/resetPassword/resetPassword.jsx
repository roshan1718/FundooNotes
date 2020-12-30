import React from "react";
import "./resetPassword.scss";
import { Input, Button } from "antd";
//import { Link } from "react-router-dom";

export default class resetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      confirmPassword: null,

      formErrors: {
        errorPassword: "",
        errorConfirmPassword: "",
      },
    };
  }

  onValueChange = (e) => {
    let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.setState({
      [e.target.name]: e.target.value,
    });

    let inputs = this.state.formErrors;
    switch (e.target.name) {
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

  render() {
    return (
      <div className="rpouterCard">
        <div className="rploginCard">
          <div className="rpfundooAlign">
            <div className="Fcolor">F</div>
            <div className="Fcolor">u</div>
            <div className="Fcolor">n</div>
            <div className="Fcolor">d</div>
            <div className="Fcolor">o</div>
            <div className="Fcolor">o</div>
          </div>
          <div className="rpfont1">
            <h5>Account recovery</h5>
          </div>
          <p>Enter new password</p>
          <div className="rpinput2">
            <Input
              className="rpinput1"
              id="outlined-basic"
              placeholder="New password"
              type="password"
              required
              onChange={this.onValueChange}
            />
            <span className="errorMessage">
              {this.state.formErrors.errorPassword}
            </span>
          </div>
          <div className="rpinput2">
            <Input
              className="rpinput1"
              id="outlined-basic"
              placeholder="Confirm password"
              type="password"
              required
              onChange={this.onValueChange}
            />
            <span className="errorMessage">
              {this.state.formErrors.errorConfirmPassword}
            </span>
          </div>
          <div className="rpbutton">
            <Button className="resetbtn">Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}
