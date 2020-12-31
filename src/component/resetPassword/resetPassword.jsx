import React from "react";
import "./resetPassword.scss";
import { Input, Button } from "antd";
import UserService from "../../services/userService";
import Snackbar from "../snackbar/snackbar";

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
    } else if (
      this.state.formErrors.errorPassword !==
      this.state.formErrors.errorConfirmPassword
    ) {
      console.log("Password not match");
      this.setState({
        snackbarStatus: true,
        text: "Password mot match",
      });
    } else {
      UserService.resetPass(userData)
        .then((data) => {
          console.log(data);
          this.setState({
            snackbarStatus: true,
            text: "New password change successfully",
          });
        })
        .catch((error) => {
          console.log("Invalid Entry", error);
          this.setState({
            snackbarStatus: true,
            text: "Invalid Entry",
          });
        });
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
            <Button className="resetbtn" type="submit" onClick={this.onSubmit}>
              Reset
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
