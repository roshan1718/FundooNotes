import React from "react";
import "./resetPassword.scss";
import {Input, Button} from "antd";
//import { Link } from "react-router-dom";

export default class resetPassword extends React.Component {

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
            <div className="rpinput2">            <Input className="rpinput1"
              id="outlined-basic"
              placeholder="New password"
              type="password"
              required
            />
          </div>
          <div className="rpinput2">
            <Input
            className="rpinput1"
              id="outlined-basic"
              placeholder="Confirm password"
              type="password"
              required
            />
          </div>
          <div className="rpbutton">
            <Button className="resetbtn">Reset</Button>
          </div>
        </div>
      </div>
    );
  }
}
