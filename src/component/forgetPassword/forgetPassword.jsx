import React from "react";
import { Input, Button } from "antd";

import "./forgetPassword.scss";
// import { Link } from "react-router-dom";

export default class forgetPassword extends React.Component {

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
            />
          </div>
          <div  className="button">
            <div >
                <Button className="backbtn" >Back</Button>
            </div>
            <div>
                <Button className="nextbtn" >Next</Button>
            </div>
          </div>
      </div>
    );
  }
}
